function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
        ></button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto text-left">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="/">
          Mathificent
        </a>
      </nav>
    </header>
  );
}

export default Header;
