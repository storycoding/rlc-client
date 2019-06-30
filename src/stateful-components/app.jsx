import React, { Component } from "react";
import Block from "../functional-components/Block.jsx";
import checkDirection from "../events/check-direction";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

class App extends Component {
  constructor() {
    super();
    this.state = {};

    this.keyPress = this.keyPress.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  keyPress({keyCode}){
    let direction = checkDirection(keyCode);
    const endpoint = "/move";
    const queryString = `?direction=${direction}`;
    const url = baseUrl + endpoint + queryString;

    fetch(url, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      this.refresh();
    })
    .catch(error => console.error('Error:', error));
  }

  refresh() {
    const endpoint = "/game";
    const url = baseUrl + endpoint;

    fetch(url)
      .then( res => res.json())
      .then( newState => {
        if(JSON.stringify(this.state) !== JSON.stringify(newState)) {
          this.setState(newState);
        }
      })
  }

  componentDidMount() {
    this.refresh();
    setInterval( () => {
      this.refresh();
    }, 1000);
  }

  render() {
    if(!this.state.grid) {
      return <div className="loading">Loading...</div>
    }
    const heroStyle = {
      gridColumn: `${this.state.hero.c+1}`,
      gridRow: `${this.state.hero.r+1}`,
    };
    return (
      <div id="container" onKeyDown={this.keyPress} tabIndex="0">
        <div id="sprite" style={heroStyle}></div>
        {this.state.grid.map( (row, rIndex) => {
          return row.map( (cell, cIndex) => (
            <Block
              key={`tile_${rIndex}.${cIndex}`}
              tile={cell}
              rIndex={rIndex}
              cIndex={cIndex}
            />
          )
          );
        })}
      </div>
    );
  }
}

export default App;
