import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header"

class App extends Component {

  constructor(){
    super();
    // this.name = "Brianna"
    this.state = {
      name: "Brianna",
      title: "Welcome"
    };
  }

  changeTitle(title) {
    this.setState({title: title});
  }

  getUsername() {
    return "Keith"
  }
  render() {

    return (
      <div className="App">
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>


        <h1>Hello, {this.getUsername()}!</h1>
        <h1>{this.state.name} is cooler!</h1>

        <Link to="/about">About Us </Link>
        <Link to="/featured"> Featured </Link>
        <Link to="/settings"> Settings</Link>


        <Footer />
      </div>
    );
  }
}

export default App;
