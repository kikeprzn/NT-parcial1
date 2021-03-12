import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";

function Navbar() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const handleSignOut = (e) => {
    auth.signOut();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bienvenido
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/colabs">
              Colaboraciones
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/about-us"
            >
              Nosotros
            </Link>
            <Link
              className="nav-link active"
              aria-current="page"
              to="/contact-us"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
      {user ? (
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span className="nav-link active">{user}</span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link active"
                style={{ cursor: "pointer" }}
                onClick={handleSignOut}
              >
                Sign out
              </span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signin"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/register"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
