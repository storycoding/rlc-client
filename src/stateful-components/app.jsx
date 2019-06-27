import React, { Component } from "react";

import Block from "../functional-components/Block.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cells: [
        ["w","w","d","w","w"],
        ["f","f","f","f","f"],
        ["f","f","f","f","f"],
        ["f","f","f","f","f"],
        ["f","f","f","f","f"],
      ],
      hero: {
        r:1,
        c:0,
      },
    };

    this.keyPress = this.keyPress.bind(this);
  }

  keyPress({keyCode}){
    const {r, c} = this.state.hero;
    switch(keyCode) {
      case 38:
        if(r > 0) {
          this.setState({hero:{r: r-1, c}});
        }
        break;
      case 40:
        if(r < this.state.cells.length-1) {
          this.setState({hero:{r: r+1, c}});
        }
        break;
      case 37:
        if(c > 0) {
          this.setState({hero:{r, c: c-1}});
        }
        break;
      case 39:
        if(c < this.state.cells[0].length-1) {
          this.setState({hero:{r, c: c+1}});
        }
        break;
    }
  }

  render() {
    console.log(this.state.hero);
    const heroStyle = {
      gridColumn: `${this.state.hero.c+1}`,
      gridRow: `${this.state.hero.r+1}`,
    };
    return (
      <div id="container" onKeyDown={this.keyPress} tabIndex="0">
        <div id="sprite" style={heroStyle}></div>
        {this.state.cells.map( (row, rIndex) => {
          return row.map( (cell, cIndex) => (
            <Block
              key={rIndex + '.' + cIndex}
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
