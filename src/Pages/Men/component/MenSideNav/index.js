import React from "react";

export default function MenSideNav() {
  return (
    <>
      <div className="col-3 ms-5">
        <div className="mb-5"></div>
        <div className="mb-5">
          <h5>CATEGORIES</h5>
          <hr />
          <div className="m-2">
            <p className="pointer">Men's Casual</p>
            <p className="pointer">Men's Sport</p>
            <p className="pointer">Men's Formal</p>
          </div>
        </div>
        <div className="mb-5">
          <h5>Select Size</h5>
          <hr />
          <div className="m-2">
            <select
              className="form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option defaultValue>Select Size</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <h5 htmlFor="customRange1" class="form-label">
            Price
          </h5>
          <hr />
          <i className="fas fa-doller-sign"></i>0 -
          <i className="fas fa-rupee-sign"></i>
          5000
          <input
            type="range"
            class="form-range"
            id="customRange1"
            min="0"
            max="5000"
          />
        </div>
        <div className="mb-5">
          <h5>Select Brand</h5>
          <hr />
          <div className="m-2">
            <p className="pointer">Nike</p>
            <p className="pointer">Addidas</p>
            <p className="pointer">Puma</p>
            <p className="pointer">Gucii</p>
            <p className="pointer">Rebook</p>
          </div>
        </div>
      </div>
    </>
  );
}
