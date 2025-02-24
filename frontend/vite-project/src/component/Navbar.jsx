import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav
        className="navbar"
        style={{ backgroundColor: "#e3f2fd", height: "100px" }}
      >
        <div className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              to="/"
              style={{ fontSize: "50px", marginLeft: "30px" }}
            >
              Auth<span style={{ color: "violet" }}>or</span>
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                style={{ marginLeft: "300px" }}
                className="navbar-nav me-auto mb-2 mb-lg-0"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                    style={{
                      fontSize: "20px",
                      marginRight: "20px",
                      color: "orange",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/insert"
                    style={{
                      fontSize: "20px",
                      marginRight: "20px",
                      color: "blue",
                    }}
                  >
                    Insert
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/display"
                    style={{
                      fontSize: "20px",
                      marginRight: "20px",
                      color: "red",
                    }}
                  >
                    Display
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/addbook"
                    style={{
                      fontSize: "20px",
                      marginRight: "20px",
                      color: "green",
                    }}
                  >
                    AddNewBook
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary"
                style={{ fontSize: "20px", marginRight: "20px" }}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-success"
                style={{ fontSize: "20px" }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
