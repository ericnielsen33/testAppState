import React, { Component } from 'react';
import ResidentProfile from "./residentProfile";

class App extends Component {

  constructor(){
    super();
    this.state = {
      name: 'Dan',
      level: 0
    }
  }
  handleOnClick = (event) => {
    event.preventDefault();
    this.setState({level: this.state.level + 1});
  }
  render() {
    return <div className="container">
        <div className="row">
          <ResidentProfile name={this.state.name} level={this.state.level} />
        </div>
        <div className="row">
          <button onClick={this.handleOnClick}>Up Level</button>
        </div>
      </div>;
  }
}
export default App;
