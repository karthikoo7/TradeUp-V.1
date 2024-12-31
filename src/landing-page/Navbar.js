import React from "react";
import { Link } from "react-router-dom"; //to replace anchor tags with link and href with to='/...' command for react router dom usage

function Navbar() {
  return (
   
      <nav class="navbar navbar-expand-lg border-bottom p-3 ">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/'>
            <b className="fs-2">TradeUp</b>
            <i class="fa-solid fa-arrow-trend-up fs-4"></i>   
          </Link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-4 ">
              <li class="nav-item">
                <Link class="nav-link active text-muted" aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link active text-muted" to='/about'>
                  About
                </Link>
              </li>
              
              <li class="nav-item ">
                <Link class="nav-link active text-muted" to='/product' >
                  Products
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active text-muted" to='/pricing'>
                  Pricing
                </Link>
              </li>

              <li class="nav-item ">
                <Link class="nav-link active text-muted" to='/support'>
                  Support
                </Link>
              </li>

            </ul>
            </form>
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;



//<img src="media/logo.svg" alt="zerodha" style={{width:"30%"}}></img> Zerodha logo