import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img src="default-monochrome.svg" alt="logo" height="auto" width="150px"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <a className="nav-link link-dark" href="/">About</a>
                    <a className="nav-link link-dark" href="#approach">Approach</a>
                    <a className="nav-link link-dark" href="#">Services</a>
                    <a className="nav-link link-dark" href="#">Resources</a>
                    <button className="btn btn-dark" type="">Contact</button>
                </div>
            </div>
        </nav>
    )
}

export default Header
