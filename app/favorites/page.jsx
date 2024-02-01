

import React from "react";

import Cart from "@/components/cart/Cart";
import { promises as fs } from 'fs';
//import supportscolor from 'node_modules/supports-color'; 
//import supportscolor1 from 'node_modules/supports-preserve-symlinks-flag'; 
//import queryString from "query-string";
// import LayoutSearch from '@/components/layouts/LayoutSearch';


const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  //const searchQuery = queryString.stringify(urlParams);

  //const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  const file = await fs.readFile('data/products.json', 'utf8'); // reading from JSON file
  const data = JSON.parse(file); 
  return data;
}

const favorites = async (productId) => {
  const productsData = await getProducts(productId);
  return (
    // <LayoutSearch>
    <>
  <Cart data={productsData} />
</>
// </LayoutSearch>
  )
  };

export default favorites;
