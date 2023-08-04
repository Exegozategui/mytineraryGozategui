import React from "react";

function Header() {
  return (
   
<div className="container">
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom p-3 bg-dark text-white">
<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
<span className="fs-4">My Tinerary</span>
</a>
<ul className="nav nav-pills">
<li className="nav-item text-white "><a href="#" className="nav-link text-white">Home</a></li>
<li className="nav-item text-white"><a href="#" className="nav-link text-white">Cities</a></li>
<button type="button" className="btn btn-outline-info">Login</button>
</ul>
</header>
</div>

  );
}
export default Header;
