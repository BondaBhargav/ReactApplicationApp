import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="container">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Home</Link>
      <Link className="navbar-brand" to="/employee">Employee</Link>
      <Link className="navbar-brand" to="/student">Student</Link>
      <Link className='navbar-brand' to="/reduxexample" >Redux-mutli-Example</Link>
    </div>
  </nav>
</div>
  )
}





