// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.includes(query))
    .map((product) => {
      return (
        <button onClick = "pn3on" className = " " >  
          <ProductItem product={product} key={product.id} />
   
         </button>
      );
  });

  return (
    <>
      <SearchBar setQuery={setQuery} />
      

      <ListWrapper>{productList}</ListWrapper>
  
     
      
    </>
  );
};

export default ProductList;
