import React from "react";
import Getintouch from "../.././../../asset/images/getintouch.png";

export default function Contactform() {
  return (
    <>
      <h1 className="text-center">For Enquiry Fill This Form</h1>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Getintouch} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Name:
                  </label>
                  <input type="text" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address:
                  </label>
                  <input type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City:
                  </label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>

                <div class="col-md-6">
                  <label for="inputZip" class="form-label">
                    Zip:
                  </label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>

                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Message:
                  </label>
                  <textarea class="form-control" id="inputAddress" rows="4" />
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
