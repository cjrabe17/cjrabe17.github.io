import React from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import characters from "./characters.json";
import "./App.css";

class App extends React.Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
        <Navbar> 
        </Navbar>
        <Jumbotron>
        </Jumbotron>
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
