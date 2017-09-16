import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <nav>
                <div class="nav-wrapper">
                    <a href="#" className="brand-logo">Keto App</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up </Link></li>
                    </ul>
                </div>
            </nav>     
        );
    }
};

export default Header;