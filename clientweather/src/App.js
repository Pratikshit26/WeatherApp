import React, { Component } from 'react';
import Landing from './Landing';
import Weather from './Weather';
import Form from './Form';

import {BrowserRouter as Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);
  

  getWeather = async (e) => {

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=lucknow&APPID=f3d181f6d7552e6a0a70f50699fbf7f0`);
    
    const response = await api_call.json();
    e.preventDefault();
    console.log(response);
    
  }

  };

  render() {
    return (
      <div className="App">
        <Landing/>
        <Form loadWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
}


export default App;
