import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Grid, Row, Col, Button } from 'react-bootstrap';
import './Profile.css';
import axios from 'axios';
import moment from 'moment';
import { Bar, Pie } from 'react-chartjs-2';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      chartData: {
        labels: [ 
          'BMR', 'Energy Expenditure', 'caloric intake'
        ],
        datasets: [
          { 
            label: 'Energy',
            data:[
              1852,
              2222,
              1666,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, .6)',
              'rgba(255, 130, 132, .6)',
              'rgba(255,  200, .6)',
            ]
          }
        ]
      },
      chartData2: {
        labels: [ 
          'protein', 'fat', 'carbs'
        ],
        datasets: [
          { 
            label: 'Daily Intakes',
            data:[
              126,
              118,
              25
            ],
            backgroundColor: [
              'rgba(50, 156, 132, .6)',
              'rgba(50, 205, 132, .6)',
              'rgba(50, 255, 132, .6)'
            ]
          }
        ]
      },
      goals: {}
    }
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  componentWillMount() {
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        axios.post('/api', {
          userInfo: this.state.profile
        }).then(function(res) {
          this.setState({ goals: res });
          console.log(res);
        }).catch(function(err) {
          console.log(err);
        });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
        <Grid>
          <Panel header="Profile" bsStyle="success">
          <Row>
            <Col xs={12} md={6}>
              <Panel header="Your Info">
                <p><ControlLabel><Glyphicon glyph="user" /> Currently Logged in as: {profile.name}</ControlLabel></p>
                <p><ControlLabel><Glyphicon glyph="apple" /> Member Since: {moment(profile.created_at).format('MMMM D, YYYY')}</ControlLabel></p>
                <p><ControlLabel><Glyphicon glyph="sunglasses" /> Nickname: {profile.nickname}</ControlLabel></p>
              </Panel>
            </Col>
            <Col md={1} />
            <Col xs={12} md={4} >
              <Button bsStyle="success" onClick={this.goTo.bind(this, 'calculator')}>
                Calculate Your Goals Here
              </Button>
            </Col>
          </Row>
          <Row>
          <Row>
            <h5>Energy Expenditure</h5>
          </Row>
          <Bar
              data={this.state.chartData}
              height={50}
              width={50}
              wid
              options={{
                maintainAspectRatio: false
              }}
            />
            </Row>
            <h5>Daily Intakes</h5>
            <Row>
            <Pie
              data={this.state.chartData2}
              height={200}
              width={200}
              options={{
                maintainAspectRatio: false
              }}
            />
          </Row>
          </Panel>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Profile;