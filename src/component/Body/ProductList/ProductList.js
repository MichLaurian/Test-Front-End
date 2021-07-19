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
            lista de productos
        </div>
    )
}

export default ProductList
