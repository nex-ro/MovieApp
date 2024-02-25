const Nav = () => {
  return (
    <>
          <nav>
            <input className="hidden" type="checkbox" id="menuToggle" />
            <label className="menu-btn" for="menuToggle">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <li className="nav-tab">Movies</li>
                <li className="nav-tab">Tv Series</li>
                <li className="nav-tab">Actor/Actres</li>
                <li className="nav-tab">FAQ</li>
                <li className="nav-tab">Contact</li>
                <li className="nav-tab">Careers</li>
              </ul>
            </div>
          </nav>
       
    </>
  );
};
export default Nav;
