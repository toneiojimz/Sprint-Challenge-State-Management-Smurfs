import React, { Component } from "react";
import "./App.css";
import Smurf from "./Smurf";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <div>
            <Smurf/>
          </div>
        
      </div>
    );
  }
}

export default App;
