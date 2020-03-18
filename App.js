import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        click_count: 0,
        total_click: 0,
        multiplier: 1,
        cost: 10,
        cookie:     "http://www.pngall.com/wp-content/uploads/2016/07/Cookie-PNG.png",
        timer: 0,
        cps: 0,
        countdown: 5,
        width: 100
    };
    setInterval(() => {
      let newTime = this.state.timer + 1;
      this.setState({timer: newTime});
      let newCount = this.state.countdown - 1;
      this.setState({countdown: newCount});
      let newCPS = Math.round(this.state.total_click / this.state.timer);
      this.setState({cps: newCPS});
      if(this.state.countdown <= 0){
        this.setState({timer: 0});
        this.setState({total_click: 0});
        this.setState({cps: 0});
      }
    }, 1000);
  }

  handleClick() {
    let newCount = this.state.click_count + this.state.multiplier;
    this.setState({click_count: newCount});
    let newTotal = this.state.total_click + 1;
    this.setState({total_click: newTotal});
    this.setState({countdown: 5});
    this.setState({width: 90});
    setTimeout(() => {
      this.setState({width: 100});
    }, 100);
  }

  multiplierClick() {
    let newMultiplier = this.state.multiplier + 1;
    this.setState({multiplier: newMultiplier});
    let newCost = this.state.cost * (this.state.multiplier + 1);
    this.setState({cost: newCost});
    let newCount = this.state.click_count - this.state.cost;
    this.setState({click_count: newCount});
  }

  render() {
    return (
      <div>
        <div className="App">
          <p>Cookies: {this.state.click_count}</p>
          <p>Multiplier: {this.state.multiplier}</p>
          <p>CPS: {this.state.cps}</p>
          <img src={this.state.cookie} className="clicker" width={this.state.width} onClick={() => this.handleClick()}>
          </img>
        </div>
        <div className="Shop">
          <h2>Shop</h2>
          <p>Multiplier: Cost {this.state.cost} Cookies</p>
          <button className="multiplier" onClick={() => this.multiplierClick()}>
            Buy
          </button>
        </div>
      </div>
    );
  }
}

export default App;