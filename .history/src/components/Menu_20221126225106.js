import { Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">ROMS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
              </ul>
            </div>
            <a className="nav-item nav-link navbar-text" href="/cart">Cart</a>
            <a className="nav-item nav-link navbar-text" href="/ManageOrder">Manage Order</a>
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
