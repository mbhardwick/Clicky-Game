import React, { Component } from 'react'
import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import cats from './cactors.json';
import './App.css';

let score = 0;
let highScore = 0;
let message = "Click each cat once to earn points! Be aware, click the same cat twice and you lose!"

class App extends Component {
  state = {
    cats,
    score,
    highScore,
    message
  };

  setClicked = id => {
    const matches = this.state.matches;
    const clickedMatch = matches.filter(match => match.id === id);
  }

  render() {
    return (
      <Wrapper>
        <Title>Cats the Musical: A Click Game</Title>
        <h3 className="score">{this.state.score}</h3>
        <h3 className="score card-header">
          Score: {this.state.score}
          <br />
          High Score: {this.state.highScore}
        </h3>
        <div className="container">
        <div className="row">
          {this.state.cats.map(match => (
            <Cards
              setClicked={this.setClicked}
              id={match.id}
              key={match.id}
              image={match.image}
            />
          ))}
        </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
