import React, { Component } from "react";
import Game from "./Game";

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
          height: "100vh"
        }}
      >
        <Game />
      </div>
    );
  }
}

export default App;
