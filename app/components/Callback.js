import React, { Component } from 'react';
// import loading from '../images/loading.svg';

class Callback extends Component {
  render() {
    const style = {
      position: 'relative',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      marginLeft: '40%'
    }

    return (
      <div style={style}>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/09b24e31234507.564a1d23c07b4.gif' alt='Loading'/>
      </div>
    );
  }
}

export default Callback;