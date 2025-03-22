import React from "react";
import { NavBarPages } from "./NavBarPages";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"; // Importa o arquivo CSS

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navBar">
      <div className="container">
        <div className="links-container">
          {NavBarPages.map((val, key) => (
            <a
              key={key}
              href={val.link}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(val.link);
              }}
              className={
                window.location.pathname === val.link ? "font-bold" : ""
              }
            >
              {val.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
