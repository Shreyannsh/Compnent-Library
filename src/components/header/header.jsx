import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="generalLink" to="/">
        <h1> CssStyler</h1>
      </Link>

      <section className="option">
        <Link className="generalLink button" to="/installation">
          {" "}
          Documentions
        </Link>
        <Link className="generalLink button" to="https://github.com/Shreyannsh">
          {" "}
          Code base
        </Link>
      </section>
    </div>
  );
};
export default Header;
