import React from "react";

function ProductItem({ product }: any) {
  return (
    <div className="border p-4">
      <img src={product.thumb} alt="" />

      <p className="font-bold my-2">119,000đ</p>
    </div>
  );
}

export default ProductItem;
