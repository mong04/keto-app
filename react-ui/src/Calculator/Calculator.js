import React, { Component } from 'react';
import { Panel, FormGroup, Radio, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            height: '',
            age: '',
            gender: 'male',
            bf: '',
            activity: '1.2'
        };
        this.handleChange = this.handleChange.bind(this);
        this.setGender = this.setGender.bind(this);
        this.setActivity = this.setActivity.bind(this);
        this.getBMR = this.getBMR.bind(this);
        this.getTDEE = this.getTDEE.bind(this);
        this.getProtein = this.getProtein.bind(this);
        this.getCaloricDeficit = this.getCaloricDeficit.bind(this);
        this.getFat = this.getFat.bind(this);
    }

    weightValidation() {
        const weight = this.state.weight;
        if (weight.length === 0) return null;
        if (isNaN(weight)) return 'error';
        else return 'success';
    }

    heightValidation() {
        const height = this.state.height;
        if (height.length === 0) return null;
        if (isNaN(height)) return 'error';
        else return 'success';
    }
    
    ageValidation() {
        const age = this.state.age;
        if (age.length === 0) return null;
        if (isNaN(age)) return 'error';
        else return 'success';
    }

    bfValidation() {
        const bf = this.state.bf;
        if (bf.length === 0) return null;
        if (isNaN(bf)) return 'error';
        else return 'success';
    }

    handleChange(e) {
        console.log(this.state);
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    setGender(e) {
        this.setState({
            gender: e.target.value
        })       
    }

    setActivity(e) {
        this.setState({
            activity: e.target.value
        })
    }

    getBMR() {
        let stats = this.state;
        let height = stats.height * 2.54;
        let weight = stats.weight / 2.2;
        if (this.state.gender === 'male'){
            return Math.floor((height * 6.25) + (weight * 9.99) - (stats.age * 4.92) + 5)
        }
        else {
            return Math.floor((height * 6.25) + (weight * 9.99) - (stats.age * 4.92) - 161)
        }
    }

    getTDEE() {
        return Math.floor(this.getBMR() * this.state.activity)
    }

    getCaloricDeficit() {
        return Math.floor(this.getTDEE() - (this.getTDEE() * .25))
    }

    getProtein() {
        let weight = this.state.weight;
        let bf = this.state.bf;
        return Math.floor((weight - (weight * (bf / 100))) * .8)
    }

    getFat() {
        return Math.floor((this.getCaloricDeficit() - (this.getProtein() * 4) - 100) / 9)
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
                            <FormGroup>
                                <Radio name="activity" checked={this.state.activity === "1.2"} value="1.2" onChange={this.setActivity} >
                                    Sedentary. Typical desk job, little to no exercise.
                                </Radio>
                                {' '}
                                <Radio name="activity" checked={this.state.activity ==="1.375"} value="1.375" onChange={this.setActivity} >
                                    Lightly active. Walking around a good amount, retail jobs. 1–3 hours per week of light exercise.
                                </Radio>
                                {' '}
                                <Radio name="activity" checked={this.state.activity ==="1.55"} value="1.55" onChange={this.setActivity} >
                                    Moderately active. 3–5 hours a week, e.g. daily 15 minutes biking and 3 times heavy lifting per week.
                                </Radio>
                                {' '}
                                <Radio name="activity" checked={this.state.activity ==="1.725"} value="1.725" onChange={this.setActivity} >
                                    Very active. Construction workers, hard exercise 6–7 days per week
                                </Radio>
                                {' '}
                            </FormGroup>
                            <hr/>
                                <ControlLabel>Your Basal Metabolic Rate (BMR) Is:</ControlLabel>
                                <FormControl.Static>
                                    { this.getBMR() } Calories
                                </FormControl.Static>
                               <ControlLabel>Your Total Daily Engery Expenditure (TDEE) Is:</ControlLabel>
                                <FormControl.Static>
                                    { this.getTDEE(this.getBMR()) } Calories
                                </FormControl.Static>
                                <ControlLabel>Your Reccommended Daily Caloric Intake Is:</ControlLabel>
                                <FormControl.Static>
                                    { this.getCaloricDeficit() } Calories
                                </FormControl.Static>
                                <ControlLabel>Your Reccommended Daily Protein Intake Is:</ControlLabel>
                                <FormControl.Static>
                                    { this.getProtein() } Grams
                                </FormControl.Static>
                                <ControlLabel>Your Reccommended Daily Fat Intake Is:</ControlLabel>
                                <FormControl.Static>
                                    { this.getFat() } Grams
                                </FormControl.Static>
                                <ControlLabel>Your Reccommended Daily Carb Intake Is:</ControlLabel>
                                <FormControl.Static>
                                    Up to 25 Grams Net Carbs (Total Carbs Minus Fiber)
                                </FormControl.Static>
                                <hr/>
                                <Button
                                    bsStyle="primary"
                                >
                                    Save
                                </Button>
                        </FormGroup>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default Calculator;