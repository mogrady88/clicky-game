import React, {Component} from 'react';
import './App.css';
import Body from "./components/Body";
import Card from "./components/Card";
import cards from "./cards.json";

class App extends Component {

  state = {
    scoreMsg: "",
    currentScore: 0,
    highScore: 0,
    cards: cards,
    pickedCards: []
  }

// loseGame = () => {

//   console.log("Lose game")
//  this.setState({ currentScore: 0 });
//  this.setState({ scoreMsg: "Wrong Answer!" });
// }

// increaseScore = () => {
//   console.log("Increase Score");
//   this.setState({ currentScore: this.state.currentScore + 1 });
//   this.setState({ scoreMsg: "Great Job! Keep Going!" });
// }

// checkHighScore = () => {

//   return(
//   console.log("Check High Score")
  
//   )
// }

shuffleArray = () => {
    console.log("shufflearray");
    // const newArray = this.state.cards.map(function(newCard){
    //   return newCard;
    // })

    let j, x, i;
    for (i = this.state.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.state.cards[i];
        this.state.cards[i] = this.state.cards[j];
        this.state.cards[j] = x;
    }
    return this.state.cards;
}

handleClickEvent = (event) => {

  this.shuffleArray();

  let chosenCard = event.target.name;

  this.setState({pickedCards: [...this.state.pickedCards, event.target.name]});
 
 this.state.pickedCards.forEach(card => {
    if(chosenCard === card){
      this.setState({ currentScore: 0 });
      this.setState({ scoreMsg: "Wrong Answer!" });
      this.setState({ pickedCards: [] });
     this.shuffleArray();
    }else{
      this.setState({ currentScore: this.state.currentScore + 1 });
      this.setState({ scoreMsg: "Great Job! Keep Going!" });
      
      if (this.state.currentScore > this.state.highScore){
        this.setState({highScore: this.state.currentScore });
      }
      this.shuffleArray();
    }
  })
  console.log(this.state.pickedCards);
}

render () {
  return(
    <Body
    highScore={this.state.highScore}
    currentScore={this.state.currentScore}
    scoreMsg={this.state.scoreMsg}>
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
