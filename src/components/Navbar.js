import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5 nav-wrapper">
        <Link to='/'>
          <img src={logo} alt="store logo" className='navbar-brand' />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to='/' className='nav-link'>Products</Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button className='btn-container'>
            <span className="mr-2">
              <i class='bx bx-cart'></i>My Cart
            </span>
            </button>
        </Link>
      </nav>

      
    )
  }
}

