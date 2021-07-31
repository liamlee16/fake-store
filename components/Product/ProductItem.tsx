import React from "react";
import StarRating from "../StarRating";

function ProductItem({ product }: any) {
  return (
    <div className="border p-4">
      <img src={product.thumb} alt="" />

      <p className="mt-2">ÁO THUN U1ATN2051003</p>
      <div className="flex items-center">
        <StarRating value="4" size={18} readonly={true} />
        <p className="ml-4 font-thin text-xs">Đã bán 12</p>
      </div>
      <p className="font-bold">119,000đ</p>
    </div>
  );
}

export default ProductItem;
