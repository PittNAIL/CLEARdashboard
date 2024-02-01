import React, { useContext } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";
import { HeartPlus } from '../HeartPlus';

import CartContext from "@/context/CartContext";

function convertColorToCSSName(color)
{
    let cs = color.split("; "); 
    let colors = []; 
    let circles = []; 
    for (let i = 0; i < cs.length; i++) {
      const c = cs[i].toLowerCase().trim();
      circles.push(c); 
    }
        if(circles.includes("gray")||circles.includes("sterling gray")|| circles.includes("warm gray"))
        {
            colors.push("gray"); 
        }

        if(circles.includes("sparkling silver"))
        {
            colors.push("lightgray"); 
        }
        if(circles.includes("black")||circles.includes("metallic black"))
        {
            colors.push("black"); 
        }
    
        if(circles.includes("beige") || circles.includes("medium blonde") || circles.includes("champagne"))
        {
            colors.push("beige"); 
        }
        if(circles.includes("gold"))
        {
            colors.push("gold"); 
        }
        if(circles.includes("bronze" )|| circles.includes("dark brown" ))
        {
            colors.push("brown"); 
        }
        return colors; 
    }
   
    
   


function filterIcons(app, stream, warranty, power, custsuppPrior, tcoil)
    {
        let icons = [];
        if (app == "Yes")
        {
            icons.push('https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-181.png'); 
        }
        if(stream == "Yes")
        {
            icons.push('https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-129.png'); 
        }
        if(warranty != "")
        {
            icons.push('https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-130.png'); 
        }
        if(power == "Rechargeable")
        {
            icons.push('https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-131.png'); 
        }
        if(custsuppPrior == "Yes")
        {
            icons.push('https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-157.png'); 
        }
        if(tcoil == "Yes")
        {
            icons.push("https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659dd38be2e68383c9bff76a/img/telecoil-1@2x.png"); 
        }

        return icons; 

    }
    
const ProductItem = ({ product }) => {
 const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemToCart({
      product: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      colors: product.colors,
      filt_options: product.filt_options,
    });
  };
  return (
    
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
        <div className="flex flex-col md:flex-row">
        <br></br>
            <div className="md:w-1/4 flex p-3">
           
                <div
                    style={{
                        width: "80%",
                        height: "70%",
                        position: "relative",
                    }}
                >
                        {/* images */}
                        <img
                        src={`/images/devicephotos/${product.pic1}`}
                        alt={`${product.pic1}`}
                        height="150"
                        width="150"
                        />
                 
                </div>
            </div>
            <div className="md:w-2/4">
                <div className="p-4">
                    <Link href={`/product/${product.id}`} className="hover:text-blue-600">
                    <b> {product.prodName}</b> {product.model}
                    </Link>
                   
                     <p className="text-gray-500 mb-2">
                        {product?.style}
                    </p>
                    <p className="text-gray-500 mb-2">
                        {/* {product?.color} */}
                        <div style={{ display: "flex" }}>
                    {convertColorToCSSName(product.color).map((color, index) => (
                        <div key={index} style={{ backgroundColor: color, borderRadius: "50%", width: "30px", height: "30px", margin: "5px" }}></div>
                    ))}
                    </div>
                        {/* <div className="circle" style={{background: convertColorToCSSName(product?.color)}}></div> */}
                    </p>
                    <p className="text-gray-500 mb-2">

                        <div style={{display: "flex",height: "30px", width: "30px"}}>
                        {filterIcons(product.app, product.stream, product.warranty, product.power, product.custsuppPrior,product.tcoil).map((icon, index) => (
                            <img className = "icons" key={index} src={icon} alt={`Icon ${index}`} />
                        ))}
                        </div>
                    </p>
                    <div className="flex flex-wrap items-center space-x-2 mb-2">
                        <div className="ratings">
                            <div className="my-1">
                               <StarRatings
                                    rating={product?.ratings}
                                    starRatedColor="#ffb829"
                                    numberOfStars={5}
                                    starDimension="18px"
                                    starSpacing="1px"
                                    name="rating"
            />
                            </div>
                        </div>
                        <b className="text-gray-300">•</b>
                       <span className="ml-1 text-yellow-500">{product?.ratings}</span> 
                    </div>
                </div>
            </div>
            <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                <div className="p-5">
                    <span className="text-xl font-semibold text-black">
                        ${product?.price}
                    </span>

                    {/* <p className="text-green-500">Free Shipping</p> */}
                    <div className="my-3">
                         {/* <a href={`/prodSpecs?product.id=${product.id}`}>  */}
                        <div className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                          
                            Learn more
                        </div>
                        {/* </a> */}
                        <a>
                        {addToCartHandler}
                        <HeartPlus/>    
                        </a>
              
                </div>
                </div>
            </div>
        </div>
    </article>

)

};
export default ProductItem;





{/* <a
className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
onClick={addToCartHandler}
>
{" "}
Add to Cart{" "}
</a> */}