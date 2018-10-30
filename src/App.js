import React, { Component } from "react";
import ResidentProfile from "./residentProfile";

class App extends Component {
  constructor() {
    super();
    this.state = {
      residents: [
        {
          id: 0,
          name: "Dan",
          level: 0
        },
        {
          id: 1,
          name: "Ryan",
          level: 1
        }
      ]
    };
  }
  incrementResident = (event) => {
    event.preventDefault();
    const id = event.target.id;
    const resident = this.state.residents[id];
    resident.level += 1;
    const newResidents = this.state.residents;
    newResidents[id] = resident;
    this.setState({residents: newResidents});
  };

  renderResidents = (handleOnClick) => {
    return this.state.residents.map((resident) => {
      return <ResidentProfile incrementResident={this.incrementResident} resident={resident} />;
    })
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderResidents()}
        </div>
      </div>
    );
  }
}
export default App;