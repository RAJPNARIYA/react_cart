import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState } from "react";
import Getintouch from "../.././../../asset/images/getintouch.png";

export default function Contactform() {
  console.log("in main form");
  const startData = {
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    message: "",
  };
  const [formData, UpdateFormData] = useState(startData);
  const [isThanksMessage, setThanksMessage] = useState(false);

  const Formfield = [
    {
      label: "Name",
      name: "name",
      value: formData.name,
    },
    {
      label: "Email",
      name: "email",
      value: formData.email,
    },
    {
      label: "Address",
      name: "address",
      value: formData.address,
    },
    {
      label: "City",
      name: "city",
      value: formData.city,
    },
    {
      label: "Zipcode",
      name: "zipcode",
      value: formData.zipcode,
    },
    {
      label: "Message",
      name: "message",
      value: formData.message,
    },
  ];

  function changeEvent(e) {
    UpdateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("in Onchange");
  }

  function submitEvent(e) {
    e.preventDefault();
    console.log(formData);
    setThanksMessage(!isThanksMessage);
    UpdateFormData({
      ...startData,
    });
    // setThanksMessage(!isThanksMessage);
    console.log("inn onclick");
  }

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Getintouch}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <form className="row g-3">
                {Formfield.map((f) => (
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name={f.name}
                      value={f.value}
                      onChange={changeEvent}
                    />
                  </div>
                ))}

                <div className="col-12">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                    onClick={submitEvent}
                  />
                </div>
                {isThanksMessage && <p>Your Enquiry send successfully.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
