import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  createTable(width, height) {
    let table = [];

    for (let i = 0; i < height; i++) {
      let row = [];
      for (let j = 0; j < width; j++) {
        row.push(<td key={j} className={`cell-${i}-${j}`} />);
      }

      table.push(<tr key={i}>{row}</tr>);
    }

    return table;
  }

  onClickTableCell(event) {
    event.target.classList.toggle("active");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table className="test-table" onClick={this.onClickTableCell}>
          <tbody>{this.createTable(4, 4)}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
