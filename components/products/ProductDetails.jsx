"use client";

import React, { useRef, useContext, useEffect } from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from "../layouts/BreadCrumbs";
import CartContext from "@/context/CartContext";
import NewReview from "../review/NewReview";
import OrderContext from "@/context/OrderContext";
import Reviews from "../review/Reviews";

const ProductDetails = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { canUserReview, canReview } = useContext(OrderContext);
  const imgRef = useRef(null);

  const setImgPreview = (url) => {
    imgRef.current.src = url;
  };

  useEffect(() => {
    canUserReview(product?._id);
  }, []);

  const inStock = product?.stock >= 1;

  const addToCartHandler = () => {
    addItemToCart({
      product: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0].url,
      colors: product.colors,
      filt_options: product.filt_options,
    });
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    {
      name: `${product?.name?.substring(0, 100)} ...`,
      url: `/products/${product?._id}`,
    },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
      <div className="prodspecs">
              <div className="text-wrapper">Specifications</div>
              <div className="group">
                <div className="div"><Link href="/productsview">Back</Link></div>
                <img
                  className="image"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6595a01010c9d9fe8a24fa7e/img/image-158@2x.png"
                />
              </div>
              <div className="overlap">
                <div className="frame">
                  <div className="frame-2">
                    <div className="frame-3">
                      <div className="frame-4">
                        <div className="rectangle" />
                      </div>
                      <div className="image-wrapper">
                      <img
                            src={`@/images/devicephotos/${product.pic1}`}
                            alt={`${product.pic1}`}
                            height="150"
                            width="150"
                            />
                      </div>
                      <div className="frame-5">
                        <div className="image-2" />
                        <img
                            src={`/images/devicephotos/${product.pic2}`}
                            alt={`${product.pic2}`}
                            height="150"
                            width="150"
                            />
                      </div>
                    </div>
                    <img
                            src={`/images/devicephotos/${product.pic1}`}
                            alt={`${product.pic1}`}
                            height="300"
                            width="300"
                            />
                    <div className="frame-6">
                      <p className="lexie-powered-by">
                        <span className="span">{product.model} </span>
                        <span className="text-wrapper-2">{product.company}</span>
                      </p>
                      <div className="frame-7">
                        <div className="frame-8">
                          <div className="model-wrapper">
                            <div className="model"> Model</div>
                          </div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-3">SKU:6538751</div>
                          </div>
                        </div>
                        <div className="frame-9">
                          <div className="div-wrapper">
                            <div className="text-wrapper-4">Color</div>
                          </div>
                          <div className="div-wrapper">
                          <div className="text-wrapper-3">{product.color}</div>
                          </div>
                        </div>
                        <div className="frame-10">
                          <div className="div-wrapper">
                            <div className="text-wrapper-5">Product Link</div>
                          </div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-6">{product.link}</div>
                          </div>
                        </div>
                        <div className="frame-11">
                          <div className="div-wrapper">
                            <div className="text-wrapper-4">Rating</div>
                          </div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-7">3.8 (234 reviews)</div>
                          </div>
                        </div>
                        <div className="frame-10">
                          <div className="div-wrapper">
                            <div className="text-wrapper-4">Price</div>
                          </div>
                          <div className="div-wrapper">
                            <div className="text-wrapper-8">${product.price}</div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <div className="rectangle-2" />
                        <div className="frame-13">
                          <div className="text-wrapper-9">Add to wishlist</div>
                          <img
                            className="image-5"
                            alt="Image"
                            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6595a01010c9d9fe8a24fa7e/img/image-182.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
                <img
                  className="image-7"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6595a01010c9d9fe8a24fa7e/img/image-190.png"
                />
              </div>
              <div className="text-wrapper-10">GENERAL</div>
              <div className="overlap-group">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-4">Power for the device</div>
                    </div>
                    <div className="frame-16">
                      <div className="text-wrapper-11">{product.power}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-4">Charger</div>
                    </div>
                    <div className="frame-18">
                      <div className="text-wrapper-11">{product.charger}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-16">
                      <p className="text-wrapper-4">How is the volume controlled?</p>
                    </div>
                    <div className="frame-16">
                      <div className="text-wrapper-11">{product.volume}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                    <span class="tooltip-container">
      <span class="tooltip-content"> Fine tuning lets you change the amplification to better meet your hearing needs.</span>
                      <p className="text-wrapper-4">How do I fine-tune the device?</p>
                      </span>
                    </div>
                    <div className="frame-18">
                      <div className="text-wrapper-11">{product.finetune}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-19">
                      <p className="p">Bluetooth used to connect to a smartphone app?</p>
                    </div>
                    <div className="frame-20">
                      <div className="text-wrapper-12">{product.app}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-21">
                      <div className="bluetooth-used-to-wrapper">
                        <p className="bluetooth-used-to">
                          Bluetooth used to deliver (stream) sound from smart phone&nbsp;&nbsp;to hearing aid?
                        </p>
                      </div>
                    </div>
                    <div className="frame-21">
                      <div className="text-wrapper-12">{product.stream}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-16">
                    <span class="tooltip-container">
      <span class="tooltip-content"> A separate device that allows you to adjust the hearing aids.</span>
                      <div className="text-wrapper-4">Remote control option</div>
                      </span>
                    </div>
                    <div className="frame-16">
                      <div className="text-wrapper-11">{product.remote_cont}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                    <span class="tooltip-container">
      <span class="tooltip-content"> The ability to turn the hearing aid on or off.</span>
                      <div className="text-wrapper-4">On/Off Control</div>
                      </span>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.onoff}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Telecoil (t-coil)</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.tcoil}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                    <span class="tooltip-container">
      <span class="tooltip-content"> Additional devices that you may use with the hearing aids.</span>
                      <div className="text-wrapper-4">Accessories</div>
                      </span>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.accessories}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                    <span class="tooltip-container">
      <span class="tooltip-content"> Hearing aids that are labeled water resistant should not be damaged by a small amount of moisture. 
                                    Hearing aids are not waterproof. It is always a good idea to avoid getting the hearing aids wet.</span>
                      <div className="text-wrapper-4">Water resistant</div>
                      </span>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.water_resis}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Warranty length</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.warranty}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <p className="text-wrapper-4">Can this device be returned?</p>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.return}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">SUPPORT</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <p className="text-wrapper-4">Consumer support prior to ordering</p>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.custsuppPrior}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <p className="text-wrapper-4">Consumer support after you receive the device</p>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.custsuppPrior}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">USER EXPERIENCE</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Set-up time</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.setuptime}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Ease of set-up</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.easeofsetup}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Fit</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.fit}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Comfort</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.comfort}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">LISTENING PERFORMANCE</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Sound quality of speech</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.soundqualSpeech}</div>
                    </div>
                  </div>
                  <div className="frame-15">
                    <div className="frame-22">
                      <div className="text-wrapper-4">Sound quality of music</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.soundqualMusic}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-22">
                      <div className="text-wrapper-4">CLEARScore</div>
                    </div>
                    <div className="frame-22">
                      <div className="text-wrapper-11">{product.clearscore}</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="text-wrapper-13">CONSUMER REVIEWS</div>
                    </div>
                  </div>
                  <div className="frame-17">
                    <div className="frame-18">
                      <div className="frame-wrapper">
                        <div className="frame-23">
                          <p className="text-wrapper-14">(In the future, the consumer reviews will appear in this area)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* i for addinf */}
                <img
                  className="image-8"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659061273c41bd3aa2997b5d/img/image-176.png"
                />
              </div>
            
            
            </div>
      </section> 
      </>
 
  );
};

export default ProductDetails;
