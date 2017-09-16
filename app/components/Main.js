import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="body">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
};

export default Main;