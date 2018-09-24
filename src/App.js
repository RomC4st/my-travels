import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mexique-Italie</h1>
        </header>
        <Travel
          destination="Mexico"
          country="Mexique"
          photo="https://www.telegraph.co.uk/content/dam/Travel/2016/September/mexico-hub-AP-TRAVEL.jpg?imwidth=1000"
          distance="9195km"
        />
        <Travel
          destination="Venise"
          country="Italie"
          photo="https://www.cap-voyage.com/wp-content/uploads/2015/08/Hotel-Kette-Venise-Italie.jpg?imwidth=1000"
          distance="1111.7km"  
        />
      </div>
    );
  }
}

export default App;
