import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="row bg-dark mt-3">
        <div className="col-2 m-3 text-justify">
          <h5 className="text-white">About Shop</h5>
          <hr className="text-white"></hr>
          <p className="text-muted">
            We possess within us two minds. So far I have written only of the
            conscious mind.We further know that the subconscious has recorded
            every event. This is just perfect theme.
          </p>
          {/* <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                        </ul> */}
        </div>

        <div className="col-2 m-3 text-justify">
          <h5 className="text-white">INFORMATION</h5>
          <hr className="text-white"></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Our Store
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Delivery Information
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Term & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Return
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2 m-3 text-justify">
          <h5 className="text-white">MY ACCOUNT</h5>
          <hr className="text-white"></hr>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                My Account
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Order History
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                My Wishlist
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                Take Order
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2 m-3">
          <h5 className="text-white">GET IN TOUCH</h5>
          <hr className="text-white"></hr>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                <i className="fa fa-home"></i> Rajkot,Gujarat,India
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                <i className="fa fa-phone"></i> +91 9876543210
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                <i className="fa fa-envelope"></i> shoecorner@gmail.com
              </a>
            </li>
          </ul>

          <h5 className="text-white">FIND US ON</h5>
          <hr className="text-white"></hr>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-muted">
                <i class="fa-brands fa-facebook-square m-2 fs-3 icons-f"></i>
                <i className="fa-brands fa-instagram m-2 fs-3 icons-i"></i>
                <i className="fa-brands fa-twitter m-2 fs-3 icons-t"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2 m-3">
          <h5 className="text-white">Link to Other page</h5>
          <hr className="text-white"></hr>

          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <NavLink href="#" className="nav-link p-0 text-muted" to="home">
                Home
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink href="#" className="nav-link p-0 text-muted" to="about">
                About
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink
                href="#"
                className="nav-link p-0 text-muted"
                to="Contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="d-flex justify-content-between py-4 my-4 border-top">
                    <p>© 2021 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul>
                </div> */}
    </>
  );
}

export default Footer;
