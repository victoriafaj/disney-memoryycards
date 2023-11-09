import React, { Component } from 'react';
import MemoryCardFront from "./components/MemoryCardFront";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import disney from "./disney.json";
import './App.css';

 const shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
 }

 var selectedCards = [];

class App extends Component {
    
    state = {
        disney,
        selectedCards
    };

    selectCard = id => {
        selectedCards.includes(id) ? selectedCards = [] : selectedCards.push(id);
        this.setState({ selectedCards });
    };

    render() {
        const shuffledCards = shuffleArray(this.state.disney);
        return (
            <Wrapper>
                <Title>
                    {
                        <p>
                            <img className="logo" alt="Disney" src="https://media.giphy.com/media/up8aqnv3GOVd6/giphy.gif" />
                            <div className="scoreboard">PUNTAJE: {this.state.selectedCards.length}</div>
                        </p>
                    }
                </Title>
                {shuffledCards.map(disney => (
                    <MemoryCardFront
                        selectCard={this.selectCard}
                        id={disney.id}
                        h
                        key={disney.id}
                        name={disney.name}
                        image={disney.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
