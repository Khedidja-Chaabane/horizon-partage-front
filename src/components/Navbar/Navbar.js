import React from 'react';
// import logo from './images'; 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          <img src="" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          
        </a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/forum">Forum</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/connexion">Connexion/Inscription</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/actions">Actions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/newDon">Faire un don</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
