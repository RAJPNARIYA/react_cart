import { Link, NavLink, Outlet } from "react-router-dom";
import product from "../images/sport-2.jpg";

function ProductCard(props) {
  return (
    <>
      <div className="col">
        <div className="card container border-0">
          <img
            src={props.image}
            className="card-img-top"
            alt="ProductImg"
            height="300px"
          />
          <div className="card-body text-center middle">
            <NavLink className="btn bg-info  btn-centers" to="productdetails">
              View Details
            </NavLink>
            <br />

            <button className="btn bg-warning m-2">Add To Cart</button>
          </div>
        </div>
        <h3 className="card-title text-center">{props.name}</h3>
        <p className="card-text text-center">{props.price}</p>
      </div>
    </>
  );
}

export default ProductCard;
