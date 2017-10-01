import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Panel, Grid, Image, Row, Col } from 'react-bootstrap';
import './Info.css';
class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        <Grid>
            <Panel header="Home" bsStyle="success">
                    <Row className="row">
                        <Col xs={1} md={1} />
                        <Col xs={10} md={10}>
                            <Image src="https://prod-dietdoctor-d3xpwb8eqyot4ma5.stackpathdns.com/wp-content/uploads/2015/07/challenge_pic2-800x319.jpg" responsive />
                        </Col>
                        <Col xs={1} md={1} />
                    </Row>
                    <Row>
                        <Col xs={6} md={3}>
                            <Panel bsStyle="success" header="What is the Keto Diet?" >
                                A keto diet is well known for being a low carb diet, where the body produces ketones in the liver to be used as energy.
                            </Panel>
                        </Col>
                        <Col xs={6} md={3}>
                            <Panel bsStyle="success" header="What is Ketosis?" >
                                Ketosis is a natural process the body initiates to help us survive when food intake is low. The key take away is that during this process the body breaks down fat, instead of glucose. 
                            </Panel>
                        </Col>
                        <Col xs={6} md={3}>
                            <Panel bsStyle="success" header="What are the benefits?" >
                                <ul>
                                    <li>Improved mental focus</li>
                                    <li>Fast Weight Loss</li>
                                    <li>Less Acne</li>
                                    <li>Increased Endurance</li>
                                    <li>Less Heartburn</li>
                                </ul>
                            </Panel>
                        </Col>
                        <Col xs={6} md={3}>
                            <Panel bsStyle="success" header="How to get started?">
                                Signing up with our application is a great place to start. Enter in some basic information and we'll give you a breakdown of the diet you need. 
                            </Panel>
                        </Col>
                    </Row>
                    <div className="get">
        {
          isAuthenticated() && (
              <h4>
                You are logged in! You can now view your{' '}
                <Link to="profile">profile area</Link>
                .
              </h4>
            )
        }
        {
          !isAuthenticated() && (
            <div>
              
              <h4>
                To see your Keto Diet Goals{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}
                >
                  Log In Here!
                </a>
                {' '}
              </h4>
              </div>
            )
        }
        </div>
        </Panel>
      </Grid>
      </div>
    );
  }
}
export default Home;