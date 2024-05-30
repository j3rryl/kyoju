import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  function toggleMenu() {
    console.log(mobile);
    setMobile(!mobile);
  }
  return (
    <>
      <header className={`navbar-header ${mobile ? "mobile" : ""}`}>
        <FontAwesomeIcon
          icon={faBars}
          className="icon-logo"
          onClick={toggleMenu}
        />
        <h5>Kyoju Listings</h5>
        <nav className="navbar-links">
          <ul className="list-links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="listings">Listings</NavLink>
            </li>
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <button className="contact-btn">Contact Us</button>
            </li>
          </ul>
        </nav>
      </header>
      <div className="spacer">&nbsp;</div>
    </>
  );
};

export default Navbar;
