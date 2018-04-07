import React from "react";
import CharacterCard from "./components/CharacterCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    characters,
    message: "Click an image to begin!",
    highScore: 0,
    currentScore: 0,
    unselectedCharacters: characters
  };

  randomizeCharacters = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    };
  };

  selectCharacter = character => {
    const findCharacter = this.state.unselectedCharacters.find(item => item.name === character);

    if (findCharacter === undefined) {
      this.setState({
        message: "Wrong!",
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        characters,
        unselectedCharacters: characters
      });
    } else {
      const findNewCharacter = this.state.unselectedCharacters.filter(item => item.name !== character);
      this.setState({
        message: "Correct!",
        currentScore: this.state.currentScore + 1,
        characters,
        unselectedCharacters: findNewCharacter
      });
  } 
  this.randomizeCharacters(characters);
  }

  render() {
    return (
      <div className="text-center">
        <Navbar 
          message = {this.state.message}
          currentScore = {this.state.currentScore}
          highScore = {this.state.highScore}
        />
        <Jumbotron />
        <Container>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            selectCharacter={this.selectCharacter}
            currentScore={this.state.currentScore}
          />
        ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;