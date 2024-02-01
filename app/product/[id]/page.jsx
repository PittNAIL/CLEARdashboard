import ProductDetails from "@/components/products/ProductDetails";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import mongoose from "mongoose";

const getProductDetails = async (id) => {
  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  return data?.product;
};

const ProductDetailsPage = async ({ params }) => {

  const isValidId = mongoose.isValidObjectId(params?.id)
  // if (!isValidId)
  // {
  //   return redirect("/"); 
  // }
  const product = await getProductDetails(params.id);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
