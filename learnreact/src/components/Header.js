import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';

import Title from "./Header/Title";

export default class Header extends Component {

  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
     return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title={this.props.title}/>
          <input value={this.props.title} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}
