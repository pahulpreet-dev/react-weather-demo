import React, { Component } from "react";
import ShowTemp from "./show-temp.component";
import "bootstrap/dist/css/bootstrap.css";

const API_KEY = "429736441cf3572838aa10530929f7cd";

class SearchBar extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    minTemp: undefined,
    maxTemp: undefined,
    description: undefined,
    error: false,
  };

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.cityName.value;
    const country = e.target.countryName.value;

    if (city && country) {
      this.setState({ error: false });
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        temperature: this.getCelcius(response.main.temp),
        minTemp: this.getCelcius(response.main.temp_min),
        maxTemp: this.getCelcius(response.main.temp_max),
        description: response.weather[0].description,
      });
    } else this.setState({ error: true });
  };

  getCelcius = (temp) => (temp = (temp - 273).toFixed(0));

  showError = (error) => {
    return (
      <div className="alert alert-danger" role="alert">
        No city and country names were entered
      </div>
    );
  };

  render() {
    return (
      <div className="container mt-5">
        <form className="form" onSubmit={this.getWeather}>
          <div className="form-group">
            {this.state.error && this.showError()}
          </div>
          <div className="form-group">
            <div className="row text-center">
              <div className="col-md-5">
                <input
                  className="form-control"
                  type="text"
                  name="cityName"
                  placeholder="Enter City"
                ></input>
              </div>
              <div className="col-md-5">
                <input
                  className="form-control"
                  type="text"
                  name="countryName"
                  placeholder="Enter Country"
                ></input>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary btn-md container-fluid">
                  Get Temperature
                </button>
              </div>
            </div>
          </div>
        </form>
        <ShowTemp
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default SearchBar;
