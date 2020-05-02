import React, { Component } from "react";

class ShowTemp extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center container-fluid py-3" name="city-name">
            {this.props.city}
          </h1>
        </div>
        <div className="row">
          <img className="text-center container-fluid py-3" name="icon"></img>
        </div>
        <div className="row">
          <h3 className="text-center container-fluid py-3" name="temp">
            {this.props.temperature}
          </h3>
        </div>
        <div className="row">
          <h4 className="text-center container-fluid py-3 col-md-6" name="min">
            {this.props.minTemp}
          </h4>
          <h4 className="text-center container-fluid py-3 col-md-6" name="max">
            {this.props.maxTemp}
          </h4>
        </div>
        <div className="row">
          <h4 className="text-center container-fluid py-3" name="description">
            {this.props.description}
          </h4>
        </div>
      </div>
    );
  }
}

export default ShowTemp;
