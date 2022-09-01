import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <header className="bg-light border-bottom">
      <div className="row p-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-4 d-flex align-items-center justify-content-between">
          <div className="col-1">
            <i class="fa-solid fa-square-plus list-style fs-4"></i>
          </div>
          <div className="col-1">
            <i class="fa-solid fa-clock list-style fs-4"></i>
          </div>
          <div className="form-group has-search col-9 ms-2">
              <i className="fa fa-search form-control-feedback"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-3 fs-5 d-flex justify-content-between  align-items-center"
          >
            <i className="fa-solid fa-user-group list-style"></i>
            <i className="fa-solid fa-bell list-style"></i>
            <i className="fa-solid fa-gear list-style"></i>
            <i class="fa-solid fa-circle-question list-style"></i>
            <div className="d-flex align-items-center me-3">
              <div className="dropdown list-style">
                <img
                  src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png"
                  alt="avatar"
                  style={{ borderRadius: "50%" }}
                  width={40}
                  height={40}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul className="dropdown-menu">
                  <li>
                    <Link to={""} className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="dropdown-item">
                      Log In
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="dropdown-item">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
