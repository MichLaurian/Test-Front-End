
import { useEffect, useState } from "react/cjs/react.development";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
 const [product, setProduct] = useState([]);
 let products = "https://corebiz-test.herokuapp.com/api/v1/products";

 useEffect(() => {
  getProducts();
 }, []);

 const getProducts = async () => {
  const data = await fetch(products);
  const product = await data.json();
  console.log(product);
  setProduct(product);
 };
 return (
  <div>
    {product.map((product)=>(
        <ProductCard key={product.productId} product={product}/>
    ))}
  </div>
 );
};

export default ProductList;
