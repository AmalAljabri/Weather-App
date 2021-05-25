
import './App.css';
import React, { Component } from 'react';
import FormComponent from './components/Form';
import Weather from './components/Weather';

const API_KEY = "1a7d07d2f9fa595b52cf010cb859004d";
const date = new Date();

class App extends Component {
  state = {
    city: '',
    country: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    humidity: '',
    description: '',
    icon: '',
    error: '',
    date: ''
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data)

    if (city) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: '',
        date: (date.toUTCString()).slice(0, 16)
      })
    } else {
      this.setState({
        city: '',
        country: '',
        temp: '',
        temp_max: '',
        temp_min: '',
        humidity: '',
        description: '',
        icon: '',
        error: 'Please enter a city name!',
        date: ''
      })
    }
  }
  render() {
    return (
      <div className="app container">
        <h1>Weather App</h1>
        <div className="card mt-5 mb-5 p-5">
          <FormComponent
            getWeather={this.getWeather}
          />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temp={this.state.temp}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            humidity={this.state.humidity}
            description={this.state.description}
            icon={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
            error={this.state.error}
            date={this.state.date}
          />
        </div>
        <p className="footer"> Made With ❤️ By Amal Aljabri</p>
      </div>
    );
  }
}

export default App;
