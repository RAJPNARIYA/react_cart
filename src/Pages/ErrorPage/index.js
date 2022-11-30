import React from "react";
import { NavLink } from "react-router-dom";

export default function errorpage() {
  return (
    <>
      <div>
        <div className="text-center">
          <h1 className="display-1">404</h1>
          <h3 className="text-danger">Opps! Page not found.</h3>
          <p>The page you’re looking for doesn’t exist.</p>
          <NavLink to="home" className="btn btn-primary">
            Go to Home
          </NavLink>
        </div>
      </div>
    </>
  );
}
