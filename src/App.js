import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [playerAmount, setPlayerAmount] = useState(1);
  const [betsLocked, setBetsLocked] = useState(false);
  const [playerBet, setPlayerBet] = useState(0);

  const generateDeck = () => {
    const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = ['♦', '♣', '♥', '♠'];
    const deck = [];
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        deck.push({ number: cards[i], suit: suits[j] });
      }
    }
    return deck;
  };
  let deck = generateDeck();
  console.log(deck);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const playDeck = shuffle([...deck, ...deck]);
  shuffle(playDeck);
  console.log(playDeck, 'playDeck');

  const placeBet = e => {
    setPlayerBet(e.target.value);
    e.preventDefault();
    console.log(`you bet ${e.target.value}`);
  };
  const startGame = () => {
    let players = ['player1', 'player2', 'player3', 'player4', 'dealer'];
    let activePlayers = players.filter(player => {
      return player.bet > 0;
    });
    console.log(activePlayers, 'active players');
  };
  startGame();
  const hit = () => {};
  const doubleDown = () => {};
  const stay = () => {};

  return (
    <div className="App">
      <p>Dealer Cards</p>

      <div className="dealer">
        {' '}
        <div className="dealer-cards"></div>
        <div className="dealer-cards"></div>
      </div>
      <p>Player Cards</p>

      <div className="player">
        <div className="player-cards"></div>
        <div className="player-cards"></div>
      </div>
      <div className="player-actions">
        <p>Player Actions</p>
        <form>
          <input type={'number'} />
          <button type="submit" onClick={placeBet}>
            Place Bet
          </button>
        </form>
        <button>hit</button>
        <button>stay</button>
        <button>double down</button>
        <button onClick={startGame}>start game</button>
      </div>
    </div>
  );
}

export default App;
