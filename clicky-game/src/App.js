import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Superheros from "./Superheros.json";

class App extends Component {
  render() {
    return (
         <Wrapper>
                <Title>To boldly click where no one has clicked before!</Title>
        
                <h3 className="scoreSummary">
                    {this.state.clickMessage}
                </h3>
                
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.correctGuesses} 
                    <br />
                    Best Score: {this.state.bestScore} 
                </h3>

                {this.state.superheros.map(superhero => (
                    <superhero
                        setClicked={this.setClicked}
                        id={superhero.id}
                        key={superhero.id}
                        image={superhero.image}
                    />
                ))}
            </Wrapper>
    );
  }
}

export default App;
