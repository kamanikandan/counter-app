import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        {" "}
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>{" "}
      </div>
    </nav>
  );
};

export default NavBar;
