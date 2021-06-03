import React from 'react';

function Header(props){

return (

<nav className="mb-5">
<ul className="nav justify-content-end nav-fill">
    <li className="nav-item bg-dark bg-gradient">
        <a className="nav-link disabled text-white ">David Sanchez</a>
    </li>
    <li className="nav-item bg-dark">
        <a className="nav-link text-white active border border-5 border-info" aria-current="page">Home</a>
    </li>
    <li className="nav-item bg-dark">
        <a className="nav-link text-white" href="./portfolio.html">Portfolio</a>
    </li>
    <li className="nav-item bg-dark">
        <a className="nav-link text-white" href="./contact.html">Contact</a>
    </li>
</ul>
</nav>
)

}

export default Header;