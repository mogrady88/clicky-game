import React, {Component} from 'react';
import './App.css';
import Body from "./components/Body";
import Card from "./components/Card";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards: cards,
    pickedCards: []
  }

handleClickEvent = (event) => {
  this.setState({pickedCards: [...this.state.pickedCards, event.target.name]});
  console.log(this.state.pickedCards);
}

render () {
  return(
    <Body>
      {this.state.cards.map(card => (
      <Card 
      name = {card.name}
      image = {card.image}
      handleClickEvent={this.handleClickEvent}
      />
      ))}
    </Body>
  )};

};

export default App;
