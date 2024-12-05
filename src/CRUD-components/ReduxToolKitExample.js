import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const ReduxToolKitExample = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-4 p-3">
        <NavLink 
          className={({ isActive }) => `navbar-brand border ${isActive ? "active" : ""}`} 
          to="todo"
        >
          TodoApp
        </NavLink>
        <NavLink 
          className={({ isActive }) => `navbar-brand border ${isActive ? "active" : ""}`} 
          to="account"
        >
          AccountApp
        </NavLink>
        <NavLink 
          className={({ isActive }) => `navbar-brand border ${isActive ? "active" : ""}`} 
          to="products"
        >
          Products
        </NavLink>

      
      </div>
     
      <Outlet />
    </>
  );
};
