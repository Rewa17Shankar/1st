import React from 'react';

interface NavbarProps {
  toggleMode: () => void; 
  curmode: string;        
}

const Navbar: React.FC<NavbarProps> = ({ toggleMode, curmode }) => {
  return (
    <div className="navigation d-flex justify-content-between align-items-center p-2">
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Rewa Shankar Gupta</a>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Newsletter</a>
        </li>
        <li id="mode" className="nav-item">
          <a className="nav-link" onClick={toggleMode} aria-disabled="true">
            <img src="images/moon.png" alt="Dark Mode" id="darkIcon" className="mode-icon" style={{ display: curmode === "light" ? "inline" : "none" }} />
            <img src="images/sun.png" alt="Light Mode" id="lightIcon" className="mode-icon" style={{ display: curmode === "dark" ? "inline" : "none" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
