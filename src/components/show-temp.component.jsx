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
          {this.props.temperature && (
            <h3 className="text-center container-fluid py-3" name="temp">
              {this.props.temperature}&deg;C
            </h3>
          )}
        </div>
        <div className="row container-fluid">
          <h4 className="text-center container-fluid py-3">
            {this.props.minTemp && (
              <span className="mx-5" name="min">
                {this.props.minTemp}&deg;C
              </span>
            )}
            {this.props.maxTemp && (
              <span className="mx-4" name="max">
                {this.props.maxTemp}&deg;C
              </span>
            )}
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
