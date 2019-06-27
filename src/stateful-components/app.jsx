import React, { Component } from "react";
import checkCollision from "../events/check-collision";
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
    const { hero, cells } = this.state;
    let { r, c } = hero;

    switch(keyCode) {
      case 38:
        r--;
        break;
      case 40:
        r++;
        break;
      case 37:
        c--;
        break;
      case 39:
        c++;
        break;
    }

    const isColliding = checkCollision({r,c}, cells);
    
    if(!isColliding) {
      this.setState({ hero:{ r, c } });
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
