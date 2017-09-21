import React, { Component } from 'react';

class Info extends Component {
    render() {
        return(
            <div className="container">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" src="https://prod-dietdoctor-d3xpwb8eqyot4ma5.stackpathdns.com/wp-content/uploads/2015/07/challenge_pic2-800x319.jpg" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">What is Keto<i className="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
        );
    }
};

export default Info;