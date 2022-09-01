import React from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from './../../Components/Header/TopNavbar';
import SideNavbar from './../../Components/Header/SideNavbar';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark padding__row">
          <SideNavbar />
        </div>
        <div className="col-10">
          <div className="row bg-light">
            <TopNavbar />
          </div>
          <div className="row">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
