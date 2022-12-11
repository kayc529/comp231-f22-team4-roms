import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AuthService from '../features/authentication/auth-service';
  
const Menu = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(()=>{
    setIsLoggedIn(AuthService.getCurrentUser());
  }, []);

  function toggleLogin()
  {
    if(isLoggedIn)
    {

      return(
        <li><a className="dropdown-item" href="/signout">Sign Out</a></li>
      );
      
    }
    else
    {
      return(
        <li><a className="dropdown-item" href="/signin">Sign In</a></li>
      );
    }
  }
  
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">ROMS</a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li>
                  <a className="nav-item nav-link navbar-text" href="/ManageOrder"> Manage Order</a>
                </li>
                <li>
                  <a className="nav-item nav-link navbar-text" href="/LiveOrder"> Live Order</a>
                </li>
              </ul>
              
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Admin</a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    { toggleLogin() }
                    <li><a className="dropdown-item" href="/menu-items">Menu Items</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    {/* <li><a className="dropdown-item" href="/">Order</a></li>
                    <li><a className="dropdown-item" href="/order-history">Order History</a></li> */}
                    <li><a className="dropdown-item" href="/staffs">Staff</a></li>
                    <li><a className="dropdown-item" href="/setting">Setting</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Cart">Cart</a>
                </li>
              </ul>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Menu;
