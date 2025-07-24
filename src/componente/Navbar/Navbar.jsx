
import React from 'react'
import { Link, NavLink } from 'react-router-dom'




export default function Navbar() {
  return (
    <>

    <div className=''>
      <h1></h1>
    </div>
    <div className="bg-primary py-4  fixed-top">
  <div className="container d-flex justify-content-between align-items-center">
    <Link
      className="text-decoration-none text-white px-5 fw-bold fa-2x"
      to="/"
    >
      Start Framework
    </Link>

    <ul className="list-unstyled d-flex m-0">
      <li>
        <NavLink
          className="text-decoration-none text-white px-3 fw-bold"
          to="/about"
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-decoration-none text-white px-3 fw-bold"
          to="/portfolio"
        >
          PORTFOLIO
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-decoration-none text-white px-3 fw-bold"
          to="/contact"
        >
          CONTACT
        </NavLink>
      </li>
    </ul>
  </div>
</div>

    </>
  )
}
