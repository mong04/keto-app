import React, { Component } from 'react';
import { Panel, FormGroup, Radio, FormControl, ControlLabel } from 'react-bootstrap';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            height: '',
            age: '',
            gender: 'male',
            bf: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.setGender = this.setGender.bind(this);
    }

    weightValidation() {
        const weight = this.state.weight;
        if (isNaN(weight)) return 'error';
        else return 'success';
    }

    heightValidation() {
        const height = this.state.height;
        if (isNaN(height)) return 'error';
        else return 'success';
    }
    
    ageValidation() {
        const age = this.state.age;
        if (isNaN(age)) return 'error';
        else return 'success';
    }

    bfValidation() {
        const bf = this.state.bf;
        if (isNaN(bf)) return 'error';
        else return 'success';
    }

    handleChange(e) {
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    setGender(e) {
        this.setState({
            gender: e.target.value
        })       
    }

    render() {
       return (
            <div className="container">
                <div className="calculator-area">
                    <h1>Keto Calculator</h1>
                    <Panel header="Your Fat Loss Calculation">
                        <p>
                            To get your personalized Keto Macros, 
                            please provide some information about yourself.
                        </p>
                        <FormGroup>
                            <Radio name="gender" checked={this.state.gender === "male"} value="male" onChange={this.setGender} inline>
                                Male
                            </Radio>
                            {' '}
                            <Radio name="gender" checked={this.state.gender ==="female"} value="female" onChange={this.setGender} inline>
                                Female
                            </Radio>
                            {' '}
                            <hr/>
                            <FormGroup
                            validationState={this.weightValidation()}
                            >
                            <ControlLabel>Weight in lbs</ControlLabel>
                                <FormControl
                                    type="text"
                                    id="weight"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                validationState={this.heightValidation()}
                            >
                            <ControlLabel>Height in inches</ControlLabel>
                                <FormControl
                                    type="text"
                                    id="height"
                                    value={this.state.height}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                validationState={this.ageValidation()}
                            >
                            <ControlLabel>Age</ControlLabel>
                                <FormControl
                                    type="text"
                                    id="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                validationState={this.bfValidation()}
                            >
                            <ControlLabel>Body Fat %</ControlLabel>
                                <FormControl
                                    type="text"
                                    id="bf"
                                    value={this.state.bf}
                                    onChange={this.handleChange}
                                />
                                <br/>
                                <p>If you're not sure use <a target="_blank" rel="noopener noreferrer" href="https://i.imgur.com/Lh77Aej.jpg">this comparison</a> to visually estimate your body fat.</p>
                            </FormGroup>
                        </FormGroup>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default Calculator;