import React from 'react'
import Cards from './components/Cards/Cards';
import Title from './components/Title/Title';
import Wrapper from './components/Wrapper/Wrapper';
import cats from './cactors.json';
import './App.css';

let score = 0;
let highScore = 0;
let message = "Click each cat once to earn points! Be aware, click the same cat twice and you lose!"

class App extends React.Component {
  state = {
    cats,
    score,
    highScore,
    message
  };

  setClicked = id => {
    const cats = this.state.cats;
    const clickedCat = cats.filter(cat => cat.id === id);
  

    if (clickedCat[0].clicked) {
      console.log("Correct Guesses: " + score);
      console.log("Highscore: " + highScore);

    score = 0;
    message = "You already clicked on " + cats.name + "! You lose!";

    for(let i = 0; i<cats.length; i++) {
      cats[i].clicked = false;
    }

    this.setState({ message });
    this.setState({ score });
    this.setState({ cats });

  } else if (score < 11) {
    clickedCat[0].clicked = true;
    score++;
    message = "Great job! Try another!";
    
    if(score > highScore){
      highScore = score;
      this.setState({ highScore });
    }

    cats.sort(function(a, b){return 0.5 - Math.random()});

    this.setState({ cats });
    this.setState({ score });
    this.setState({ message });
  } else {
    clickedCat[0].clicked = true;
    score = 0;
    message = "Congratulations! You got them all! Think you can do it again?";
    highScore = 12;
    this.setState({ highScore });

    for (let i=0; i<cats.length; i++){
      cats[i].clicked= false;
    }

    cats.sort(function(a, b){return 0.5 - Math.random()});

    this.setState({ cats });
    this.setState({ score });
    this.setState({ message });
    } 
};

  render() {
    return (
      <Wrapper>
        <Title>Cats the Musical: A Click Game</Title>
        <h3 className="score"></h3>
        <h3 className="score card-header">
          Score: {this.state.score}
          <br />
          High Score: {this.state.highScore}
        </h3>
        <div className="container">
        <div className="row">
          {this.state.cats.map(cat => (
            <Cards
              setClicked={this.setClicked}
              id={cat.id}
              key={cat.id}
              image={cat.image}
            />
          ))}
        </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
