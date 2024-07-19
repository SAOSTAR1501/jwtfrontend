import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
  const [isShown, setIsShown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const session = sessionStorage.getItem("account");
    if (session) {
      setIsShown(true);
    }
    if (location.pathname === "/login") {
      setIsShown(false);
    }

    const handleStorageChange = () => {
      if (!sessionStorage.getItem("account")) {
        setIsShown(false);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      {isShown && (
        <div className="topnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Project</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      )}
    </>
  );
};

export default Nav;
