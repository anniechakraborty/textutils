import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavBar = (props)=>{
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="toggleMode" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="toggleMode">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string
}

NavBar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'Set some About text here'
}

export default NavBar;