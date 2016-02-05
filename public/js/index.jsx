import { Component } from 'react';
import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {

  constructor () {
    super();
  }

  componentDidMount () {
    if (this.pitchLocation) {
      console.log('this.pitchLocation', this.pitchLocation);
      const c   = document.getElementById("whereToPitch");
      const ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(100,75,10,0,2*Math.PI);
      ctx.stroke();

      // const ctx2 = c.getContext("2d");
      // ctx2.beginPath();
      // ctx2.arc(50,75,10,0,2*Math.PI);
      // ctx2.stroke();
    }
  }

  render () {
    let pitchLocation;
    document.body.style["background-size"] = "cover";
    document.body.style.width      = "100%";
    document.body.style.height     = "100%";
    document.body.style.margin     = 0;
    document.body.style.padding    = 0;
    document.body.style.background = '#f1f1f1';


    if (document.location.search) {
      const regex = new RegExp(/\?loc=(.*)/);
      this.pitchLocation = document.location.search.match(regex)[1];
    }

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

    const whereToPitchStyle = {
      border:"5px solid #AAAAAA"
    };

    return (
      <div id="indexTest" style={containerStyle}>
        <div id="targetBox" style={canvasContainer}>
          {this.pitchLocation ? <canvas id="whereToPitch" width="200" height="250" style={canvasStyle}></canvas> : <canvas style={canvasStyle} width="200" height="250" id="myCanvas"></canvas>}
        </div>
        <form style={formStyle} action="batter" method="post">
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