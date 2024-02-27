import { Link } from "react-router-dom";
const Nav = () => {
  const StyleLink = {
    color: 'inherit',
    textDecoration: 'none',
  };
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
                <li className="nav-tab">
                <Link style={StyleLink} to="/movies">Movies</Link></li>
                <li className="nav-tab"> <Link style={StyleLink} to="/series">TV Series</Link></li>
                <li className="nav-tab"> <Link style={StyleLink} to="/actor">Actress/Actor</Link></li>
                
              </ul>
            </div>
          </nav>
    </>
  );
};
export default Nav;
