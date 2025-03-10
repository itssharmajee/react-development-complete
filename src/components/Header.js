import { useState } from "react";
import { LOGO_URL } from "../utils/constraints";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  function loginToggle() {
    setToggle(!toggle);
  }
  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="Company Logo" />
      </div>
      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <button className="btn" onClick={loginToggle}>
          {toggle ? "Login In" : "Log Out"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
