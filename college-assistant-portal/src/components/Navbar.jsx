// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/generator">Generator</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
