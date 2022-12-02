import { Outlet } from 'react-router-dom';

const Menu = () => {
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
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">Admin</a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="/signin">Sign In</a></li>
                    <li><a className="dropdown-item" href="/signout">Sign Out</a></li>
                    <li><a className="dropdown-item" href="/signup">Sign Up</a></li>
                    <li><a className="dropdown-item" href="/menu-items">Menu Items</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/">Order</a></li>
                    <li><a className="dropdown-item" href="/">Order History</a></li>
                    <li><a className="dropdown-item" href="/staffs">Staff</a></li>
                    <li><a className="dropdown-item" href="/">Setting</a></li>
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
