import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){

return (

<nav className="mb-5">
<ul className="nav justify-content-end nav-fill">
    <li className="nav-item bg-dark bg-gradient">
        <a className="nav-link disabled text-white ">David Sanchez</a>
    </li>
    <Link to="/">
    <li className="nav-item bg-dark">
        <a className="nav-link text-white text-decoration-none">Home</a>
    </li>
    </Link>
    <Link to="/portfolio">
    <li className="nav-item bg-dark">
        <a className="nav-link text-white" href="./portfolio.html">Portfolio</a>
    </li>
    </Link>
    <Link to="/contact">
    <li className="nav-item bg-dark">
        <a className="nav-link text-white" href="./contact.html">Contact</a>
    </li>
    </Link>
</ul>
</nav>
)

}

export default Header;