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
        <h1>You should pitch a <strong>ball</strong></h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('app-container'));