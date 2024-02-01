"use client"
import React from "react";
import StarRatings from "react-star-ratings";
import {PropertyWrapperBT} from "@/components/layouts/PropertyWrapperBT.jsx"
import {PropertyWrapperSP} from "@/components/layouts/PropertyWrapperSP.jsx"
import {PropertyWrapperRech} from "@/components/layouts/PropertyWrapperRech.jsx"
import {PropertyWrapperCS} from "@/components/layouts/PropertyWrapperCS.jsx"
import {PropertyWrapperT} from "@/components/layouts/PropertyWrapperT.jsx"
import {PropertyWrapperW} from "@/components/layouts/PropertyWrapperW.jsx"

const Filters = () => {
  let queryParams;

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    if (typeof window !== "undefined") {
      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }

  return (
  
    <aside className="md:w-1/3 lg:w-1/4 px-4">
        <h1 className="font-semibold mb-2">Filtering options: </h1>
        <h3 >Change how you pick or modify your filter options​ </h3>
        <br></br>
        {/* enter  */}
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        
      </a>
      {/* ratings */}

      
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Customer Reviews</h3>
        <ul className="ulNone space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                />
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={rating}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
        
      </div>
    
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Price</h3>

        <ul className="ulNone space-y-1">
          <li>
            <label className="flex items-center">
              <input
                name="price"
                type="checkbox"
                value="Less than $100"
                className="h-4 w-4"
                defaultChecked={checkHandler("price", "Less than $100")}
              />
              <span className="ml-2 text-gray-500"> Less than $100 </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="price"
                type="checkbox"
                value="$100-$250"
                className="h-4 w-4"
                defaultChecked={checkHandler("price", "$100-$250")}
              />
              <span className="ml-2 text-gray-500"> $100-$250 </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="price"
                type="checkbox"
                value="$250-$500"
                className="h-4 w-4"
                defaultChecked={checkHandler("price", "$250-$500")}
              />
              <span className="ml-2 text-gray-500"> $250-$500 </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="price"
                type="checkbox"
                value="$500-$1000"
                className="h-4 w-4"
                defaultChecked={checkHandler("price", "$500-$1000")}
              />
              <span className="ml-2 text-gray-500"> $500-$1000 </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="price"
                type="checkbox"
                value="Above $1000"
                className="h-4 w-4"
                defaultChecked={checkHandler("price", "Above $1000")}
              />
              <span className="ml-2 text-gray-500"> Above $1000 </span>
            </label>
          </li>
          
        </ul>

       {/*<hr className="my-4" />*/}
        </div>
        
        
        {/* style from anima 
        <div className="group-11">
                    <div className="overlap-group-10">
                      <div className="group-12">
                        <div className="frame-30">
                          <div className="text-wrapper-41">Style</div>
                          <div className="frame-31">
                            <PropertyDefaultWrapper3 className="frame-420" property1="default" />
                            <img
                              className="image-37"
                              alt="Image"
                              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-227@2x.png"
                            />
                            <div className="frame-32">
                              <PropertyDefaultWrapper3 className="frame-420" property1="default" />
                              <img
                                className="image-38"
                                alt="Image"
                                src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-229@2x.png"
                              />
                            </div>
                          </div>
                          <div className="frame-31">
                            <PropertyDefaultWrapper3 className="frame-420" property1="default" />
                            <img
                              className="image-39"
                              alt="Image"
                              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-226@2x.png"
                            />
                            <div className="frame-32">
                              <PropertyDefaultWrapper3 className="frame-420" property1="default" />
                              <img
                                className="image-38"
                                alt="Image"
                                src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-228@2x.png"
                              />
                            </div>
                          </div>
                          <PropertyDefaultWrapper3 className="frame-420-instance" property1="default" />
                        </div>
                      </div>
                      <img
                        className="image-40"
                        alt="Image"
                        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-230@2x.png"
                      />
                    </div>
                    </div> */}

                    
        {/* style based on other checklists*/}


      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Style</h3>

        <ul className="ulNone space-y-1">
 
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
              />

                <img
                  className="image-37"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-227@2x.png"
                  style={{ width: '40px', height: '60px', marginRight: '10px', marginLeft: '30px' }}
                />
                        
              <span className="ml-2 text-gray-500">  </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
          />
                <img
                  className="image-38"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-229@2x.png"
                  style={{width: '40px', height: '60px', marginRight: '10px', marginLeft: '30px' }}

                />
      
                          
              <span className="ml-2 text-gray-500">  </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
              />
              
              <img
                className="image-39"
                alt="Image"
                src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-226@2x.png"
                style={{ width: '40px', height: '60px', marginRight: '10px', marginLeft: '30px' }}

              /> 

              <span className="ml-2 text-gray-500">  </span>
            </label>
          </li>
          {/* <li> */}
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                
              />
            <img
              className="image-38"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-228@2x.png"
              style={{ width: '40px', height: '60px', marginRight: '10px', marginLeft: '30px' }}

           />
              <span className="ml-2 text-gray-500">  </span>
            </label>
          {/* </li> */}
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                
              />
              <img
                  className="image-40"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-230@2x.png"
                  style={{ width: '40px', height: '60px', marginRight: '10px', marginLeft: '30px' }}

          
                />
              <span className="ml-2 text-gray-500">  </span>
            </label>
            
          </li>
        </ul>

       {/*<hr className="my-4" />*/}
        </div>

      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold mb-2">Additional Filters</h3>

        <ul className="ulNone space-y-1">
          <li>
            <label className=" items-center">
              <input
                name="addfilt"
                type="checkbox"
                value="Rechargeable hearing products"
                className="h-4 w-4"
                defaultChecked={checkHandler("addfilt", "Rechargeable hearing products")}
              />
              <span className="ml-2 text-gray-500"> Rechargeable products </span>
            </label>
          </li>
          <li>
            <label className=" items-center">
              <input
                name="addfilt"
                type="checkbox"
                value="Disposable battery hearing products"
                className="h-4 w-4"
                defaultChecked={checkHandler("addfilt", "Disposable battery hearing products")}
              />
              <span className="ml-2 text-gray-500"> Disposable battery products </span>
            </label>
          </li>
          <li>
            <label className=" items-center">
              <input
                name="addfilt"
                type="checkbox"
                value="Smartphone app capability"
                className="h-4 w-4"
                defaultChecked={checkHandler("addfilt", "Smartphone app capability")}
              />
              <span className="ml-2 text-gray-500"> Smartphone app capability </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="addfilt"
                type="checkbox"
                value="Streaming capability"
                className="h-4 w-4"
                defaultChecked={checkHandler("addfilt", "Streaming capability")}
              />
              <span className="ml-2 text-gray-500"> Streaming capability </span>
            </label>
          </li>
        
        </ul>

       {/*<hr className="my-4" />*/}
        </div>
        <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">

              <h3 className="font-semibold mb-2">Symbol Key</h3>

              <div className="frame-42">
                <div className = "">
                    
                      <PropertyWrapperBT className="frame-43" property1="default" />
                      <br></br>
                      <PropertyWrapperSP className="frame-43" property1="default" />
                      <br></br>
                      <PropertyWrapperW className="frame-43" property1="default" />
                      <br></br>
                      <PropertyWrapperRech className="frame-43" property1="default" />
                      <br></br>
                      <PropertyWrapperCS className="frame-43" property1="default" />
                      <br></br>
                      <PropertyWrapperT className="frame-43" property1="default" />

                    </div>
                    </div>
                 

        </div>
        

       
    </aside>
  );
};

export default Filters;