import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">🍿 Popcornly</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies" className="nav-cta">Movies</Link>
      </div>
    </nav>
  );
}

export default Navbar;