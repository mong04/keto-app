import React, { Component } from 'react';

class API extends Component {
    state = {cities: []}
    
      async componentDidMount() {
        const response = await fetch('/api')
        const cities = await response.json()
    
        this.setState({cities: cities})
      }

      render() {
          return (
              <div>
                <ul>
                    {this.state.cities.map( city => {
                        return <li key{...city.name}><p>City: <b>{city.name}</b></p> <p>Population: {city.population}</p></li>
                    })}
                </ul>
              </div>
          )
      }
}

export default API;