import { Component } from 'react';
import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {

  constructor () {
    super();
  }

  render () {
    return (
      <div id="indexTest">
        <canvas id="myCanvas" width="200" height="200" style={{border:"1px solid #000000"}}></canvas>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app-container'));