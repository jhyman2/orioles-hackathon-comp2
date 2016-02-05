import { Component } from 'react';
import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {

  constructor () {
    super();
  }

  render () {

    const canvasStyle = {
      border:"1px solid #000000"
    };

    const containerStyle = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transform: "translateY(50%)"
    };

    const canvasContainer = {
      display: "flex",
      justifyContent: "center"
    };

    const formStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    };

    const inputContainerStyle = {
      display: "flex",
      flexDirection: "row",
      padding: "10px"
    };

    const submitBtn = {
      padding: "6px 12px",
      background: "#1C81C9",
      borderColor: "#1C81C9",
      borderRadius: "4px",
      border: "1px outset #1C81C9",
      color: "#FFF",
      fontSize: "20px",
      width: "100px"
    }

    return (
      <div id="indexTest" style={containerStyle}>
        <div id="targetBox" style={canvasContainer}>
          <canvas id="myCanvas" width="200" height="250" style={canvasStyle}></canvas>
        </div>
        <form style={formStyle}>
          <h1>Batters Information:</h1>
          <div id="inputContainer" style={inputContainerStyle}>
            First name:
            <input type="text" name="firstname" />
            Last name:
            <input type="text" name="lastname" />
            Balls:
            <input type="number" name="balls" />
            Strikes:
            <input type="number" name="strikes" />
            Outs:
            <input type="number" name="outs" />
          </div>
          <input type="submit" value="Go" style={submitBtn} />
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app-container'));