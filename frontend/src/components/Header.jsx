import React from 'react'

function Header() {
    return (
        <header className="site-header sticky-top py-1">
            <nav className="container d-flex flex-column flex-md-row justify-content-between p-3">
              <a href="#"><img src="default-monochrome.svg" alt="" height="50px" /></a>
              <a className="py-2 d-none d-md-inline-block" href="#">Services</a>
              <a className="py-2 d-none d-md-inline-block" href="#">Approach</a>
              <a className="py-2 d-none d-md-inline-block" href="#">Clients</a>
              <a className="py-2 d-none d-md-inline-block" href="#">Contact</a>
            </nav>
        </header>
    )
}

export default Header
