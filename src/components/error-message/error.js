import React, { Component } from "react";
import "./error.css";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <h3 className="error__title">Ooops!</h3>
        <p className="error__message">
          Something went wrong, this page doesn't exist;
        </p>
      </div>
    );
  }
}

export default Error;
