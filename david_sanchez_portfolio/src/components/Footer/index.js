import React from "react";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark fixed-bottom">
        <div className="container">
    
          <span className="text-white"><i className="fab fa-linkedin"></i><a className="text-info"
              href="https://www.linkedin.com/in/david-sanchez-784014183/" target="_blank"> Connect With Me on
              LinkedIn </a><i className="fab fa-linkedin"></i></span>
          <span className="text-white"><i className="fab fa-github"></i><a className="text-warning"
              href="https://github.com/DaveyManuel" target="_blank"> Connect With Me on
              GitHub </a><i className="fab fa-github"></i></span>
    
        </div>
      </footer>    
    )
}

export default Footer;