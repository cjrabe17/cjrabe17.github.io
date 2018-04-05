import React from "react";
import CharacterCard from "./components/CharacterCard";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import characters from "./characters.json";
import "./App.css";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  state = {
    characters
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
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
        <Footer />
      </div>
    );
  }
}

export default App;
