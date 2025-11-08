import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import'./Header.css'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">Online škola</div>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Naslovnica
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            O nama
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Kategorije
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            Tečajevi
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => {
              isActive ? "active" : "";
            }}
          >
            F.A.Q.
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
