import React from "react";
import "./ProductCard.css";
import formatCurrency from 'format-currency';

const ProductCard = ({ product }) => {
    let opts = {format:'%s%v', symbol: "$"}
 return (
  <div className="productCard__wrapper">
   <div>
    <img src={product.imageUrl} className="productCard.
    __img" />
    <h4>{product.productName}</h4>

    <div className="productCard__price">
        <h5>{formatCurrency(`${product.price}`, opts)}</h5>
    </div>
   </div>
  </div>
 );
};

export default ProductCard;
