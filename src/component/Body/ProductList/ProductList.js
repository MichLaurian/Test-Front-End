import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([])
    let products = 'https://corebiz-test.herokuapp.com/api/v1/products';

    useEffect(() => {
     getProducts();
    }, [])

    const getProducts = async()=>{
        const data = await fetch(products);
        const product = await data.json();
        console.log(product);
        setProduct(product)
    }
    return (
        <div>
         {product.map((product) => {
          return (
           <span value={product.productId}  key={product.productId}>
            {product.imageUrl} {product.imageUrl}
            {product.price}
           
           </span>
           
          );
         })}
         
        </div>
    )
}

export default ProductList
