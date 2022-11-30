import logo from "../Header/cosysLogo.png";
import "../../asset/css/style.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
  Link,
  Outlet,
} from "react-router-dom";
import Slider from "../Slider";
import Footer from "../Footer";
import About from "../About";
import Navbar from "../Navbar";
import App from "../../App";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} height="50px" width="300px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="home">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="error">
                      Men's Casual Shoes
                    </NavLink>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Men's Formal Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Men's Sport Shoes
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Women's hells Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women's Formal Shoes
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Women's Sport Shoes
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
