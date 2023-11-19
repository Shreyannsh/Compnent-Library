import "./navBar.css";

import { Link, NavLink } from "react-router-dom";

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

  const activeLink = ({ isActive }) => ({
    backgroundColor: isActive ? "var(--pink-color)" : "",
    boxShadow: isActive ? "1px 2px 5px 1px rgb(0, 0, 0, 0.5)" : "",
    color: isActive ? "var(--white-color)" : "",
    transform: isActive ? "scale(1.08) translateX(10px)" : "",
    fontWight: isActive ? "bold" : "",
  });

  console.log(activeLink);

  return (
    <div className="navBar">
      <h3 className=" gettingStartedHeading">Getting Started</h3>

      <div className="componentsLink">
        <NavLink style={activeLink} className="link" to="/installation">
          Installation
        </NavLink>
      </div>
      <hr className="seprateLine" />
      <nav className="componentsLink">
        <h3 className=" componentHeading">Components</h3>
        <NavLink style={activeLink} className="link" to="/alert">
          Alert
        </NavLink>
        <NavLink style={activeLink} className="link" to="/avatar">
          Avatar
        </NavLink>
        <NavLink style={activeLink} className="link" to="/badge">
          Badge
        </NavLink>
        <NavLink style={activeLink} className="link" to="/button">
          Button
        </NavLink>
        <NavLink style={activeLink} className="link" to="/card">
          Card
        </NavLink>
        <NavLink style={activeLink} className="link" to="/heading">
          Heading
        </NavLink>
        <NavLink style={activeLink} className="link" to="/images">
          Images
        </NavLink>
        <NavLink style={activeLink} className="link" to="/loader">
          Loader
        </NavLink>
        <NavLink style={activeLink} className="link" to="/modal">
          Modal
        </NavLink>
        <NavLink style={activeLink} className="link" to="/Text">
          Text
        </NavLink>
      </nav>
    </div>
  );
};
export default NavBar;
