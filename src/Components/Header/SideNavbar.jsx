import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <nav className="header__nav " id="navbarSupportedContent">
      <ul className="list-group">
        <li className="list-group-item bg_img d-flex align-items-center justify-content-center">
          <img
            src="https://css.zohostatic.com/iam/M_5264621/v2/components/images/Zoho_logo.png"
            alt="Logo"
            width={80}
            height={39}
            className=""
          />
          <span className="text-dark fs-5 ms-2">Inventory</span>
        </li>
        <li className="list-group-item mt-2">
          <div className="nav-link">
            <div className="row">
              <div className="col-1">
                <i className="fa-solid fa-gauge"></i>
              </div>
              <div className="col-9 list-style">
                <Link to={'/home'} className="nav-link">
                  Inventory
                </Link>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item mt-3">
          <div className="nav-link">
            <div className="row ">
              <div className="col-1 ">
                <i class="fa-solid fa-cart-flatbed "></i>
              </div>
              <div className="col-10 ">
                <div
                  className="d-flex justify-content-between list-style"
                  id="panelsStayOpen-headingOne"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                >
                  <p>Dashbord</p>
                  <i className="fa-solid fa-caret-down mt-1"></i>
                </div>
                <div id="panelsStayOpen-collapseOne" className=" collapse">
                  <ul className="list-group ">
                    <li className="list-group-item list-style">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to={"items"} className="nav-link col-10">
                          items
                        </Link>
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </li>
                    <li className="list-group-item list-style">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to={"items-groups"} className="nav-link col-10">
                          Items Groups
                        </Link>
                        <i class="fa-solid fa-plus"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
