import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        CAPACITY <span>2027</span>
      </Link>

      <ul className="navbar__links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/manifesto">Manifesto</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/join">Join</Link></li>
      </ul>

      <Link to="/donate" className="navbar__cta">Donate</Link>
    </nav>
  );
}
