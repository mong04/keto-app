import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <div className="page-header" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-left">
                    <Link className="navbar-brand title" to="/">Keto App</Link>
                    </ul>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/saved">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                
        );
    }
};

export default Header;