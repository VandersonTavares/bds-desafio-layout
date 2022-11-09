import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-sm bg-primary navbar-light bg-light navbar-menu">
        <div className="container-fluid ct-container">
          <Link to="/">
            <h4>Carros Top</h4>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#carros-top"
            aria-controls="carros-top-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="carros-top">
            <ul className="navbar-nav">
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalogo" activeClassName="active">Catálogo</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
