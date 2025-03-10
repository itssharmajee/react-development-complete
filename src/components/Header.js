import { useState } from "react";
import { LOGO_URL } from "../utils/constraints";
import { Link } from "react-router-dom";

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
        {/* <p><a href="/">Home</a></p> As you can navigate in this way as well but you should not use this because it completely refresh/ reload the entire page so */}
        <Link to='/'>Home </Link>{/* so we use Link component of react router dom that does not refresh completely the page*/}

        <Link to='/about'>About </Link>
        <Link to='/service'>Services </Link>
        <Link to='/contact'>Contact </Link>

        <button className="btn" onClick={loginToggle}>
          {toggle ? "Login In" : "Log Out"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
