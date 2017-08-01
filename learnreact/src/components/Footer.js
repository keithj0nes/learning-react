import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {

  constructor(){
    super();
    this.footer = "THIS IS THE FOOTER";
  }

  render() {
    return (
      <div className="App">
        {this.footer}
      </div>
    );
  }
}
