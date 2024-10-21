import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({
  title = "Enter Text Here",
  darkStyle,
  setBGnT,
}) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={darkStyle}
      >
        <div className="container-fluid" style={darkStyle}>
          <Link className="navbar-brand" to="/TextUtils">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={darkStyle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={darkStyle}
          >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item" style={darkStyle}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/TextUtils"
                    style={darkStyle}
                  >
                    Home
                  </Link>
                </li>
              <li className="nav-item" style={darkStyle}>
                <Link className="nav-link" to="/TextUtils/about" style={darkStyle}>
                  About Us
                </Link>
              </li>
            </ul>

            <div
              className="input-group mb-3 ms-auto"
              style={{ width: "30%", marginLeft: "50%" }}
            >
              <label className="input-group-text" htmlFor="inputGroupSelect01" style={darkStyle}>
                Choose Mode
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={(e) => setBGnT(e.target.value)}
                style={darkStyle}
              >
                <option value="">Choose...</option>
                <option value="1" >White Text + Gray Background</option>
                <option value="2">Gray Text + White Background</option>
                <option value="3">Green Text + Orange Background</option>
                <option value="4">Orange Text + Green Background</option>
                <option value="5">Gold Text + Sage Background</option>
                <option value="6">Sage Text + Gold Background</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
};
