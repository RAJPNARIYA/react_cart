import React from "react";
import ProductCard from "../../componet/ProductCard";
import { productList } from "../Home/index";
import MenProduct from "./component/MenProduct";
import MenSideNav from "./component/MenSideNav";

export default function Men() {
  return (
    <>
      <div className="">
        <div className="row">
          <MenSideNav />
          <div className="col-8">
            <div className="row row-cols-md-3 g-4 m-2">
              {productList.map((p) => (
                <ProductCard
                  id={p.product_id}
                  name={p.product_name}
                  image={p.product_img}
                  price={p.product_price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
