import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="generalLink" to="/">
        <h1> CssStyler</h1>
      </Link>

      <section className="option">
        <h3>Documentions</h3>
        <h3>Code Base</h3>
      </section>
    </div>
  );
};
export default Header;
