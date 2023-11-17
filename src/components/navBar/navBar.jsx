import "./navBar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  const components = [
    "Alert",
    "Avatar",
    "Badge",
    "Card",
    "Heading",
    "Images",
    "Loader",
    "Modal",
    "Text",
  ];

  return (
    <div className="navBar">
      <h3 className=" gettingStartedHeading">Getting Started</h3>

      <div className="componentsLink">
        <Link className="link" to="/installation">
          Installation
        </Link>
      </div>

      <nav className="componentsLink">
        <h3 className=" componentHeading">Components</h3>
        <Link className="link" to="/alert">
          Alert
        </Link>
        <Link className="link" to="/avatar">
          Avatar
        </Link>
        <Link className="link" to="/badge">
          Badge
        </Link>
        <Link className="link" to="/card">
          Card
        </Link>
        <Link className="link" to="/heading">
          Heading
        </Link>
        <Link className="link" to="/images">
          Images
        </Link>
        <Link className="link" to="/loader">
          Modal
        </Link>
        <Link className="link" to="/loader">
          Loader
        </Link>
        <Link className="link" to="/Text">
          Text
        </Link>
      </nav>
    </div>
  );
};
export default NavBar;
