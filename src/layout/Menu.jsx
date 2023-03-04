import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
          <li className="menu__item">
              <Link className="menu__link" to="/">
                  Home
              </Link>
          </li>

          <li className="menu__item">
              <Link className="menu__link" to="/timer">
                  Timer
              </Link>
          </li>

          <li className="menu__item">
              <Link className="menu__link" to="/profile">
                  Profile
              </Link>
          </li>

          <li className="menu__item">
              <Link className="menu__link" to="/login">
                  Log In
              </Link>
          </li>

          <li className="menu__item">
              <Link className="menu__link" to="/signup">
                  Sign Up
              </Link>
          </li>

      </ul>
    </nav>
  );
};

export default Menu;