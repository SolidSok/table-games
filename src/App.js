import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [player1, setPlayer1] = useState({
    player: 1,
    bet: 50,
    hand: [],
    active: false,
    busted: false,
    lockedBet: false,
    blackJack: false,
    winner: false,
  });
  const [player2, setPlayer2] = useState({
    player: 2,
    bet: 20,
    hand: [],
    active: false,
    busted: false,
    lockedBet: false,
    blackJack: false,
    winner: false,
  });
  const [player3, setPlayer3] = useState({
    player: 3,
    bet: 0,
    hand: [],
    active: false,
    busted: false,
    lockedBet: false,
    blackJack: false,
    winner: false,
  });
  const [player4, setPlayer4] = useState({
    player: 4,
    bet: 0,
    hand: [],
    active: false,
    busted: false,
    lockedBet: false,
    blackJack: false,
    winner: false,
  });
  const [dealer, setDealer] = useState({
    player: 'Dealer',
    hand: [],
    active: false,
    busted: false,
    blackJack: false,
  });

  const [activeHand, setActiveHand] = useState(player1);
  const [activePlayers, setActivePlayers] = useState([]);
  const [betsPlaced, setBetsPlaced] = useState(false);
  const [bet1, setBet1] = useState('');

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
  // const deck = [
  //   'A-d',
  //   'K-d',
  //   'Q-d',
  //   'J-d',
  //   '10-d',
  //   '9-d',
  //   '8-d',
  //   '7-d',
  //   '6-d',
  //   '5-d',
  //   '4-d',
  //   '3-d',
  //   '2-d',
  //   'A-c',
  //   'K-c',
  //   'Q-c',
  //   'J-c',
  //   '10-c',
  //   '9-c',
  //   '8-c',
  //   '7-c',
  //   '6-c',
  //   '5-c',
  //   '4-c',
  //   '3-c',
  //   '2-c',
  //   'A-h',
  //   'K-h',
  //   'Q-h',
  //   'J-h',
  //   '10-h',
  //   '9-h',
  //   '8-h',
  //   '7-h',
  //   '6-h',
  //   '5-h',
  //   '4-h',
  //   '3-h',
  //   '2-h',
  //   'A-s',
  //   'K-s',
  //   'Q-s',
  //   'J-s',
  //   '10-s',
  //   '9-s',
  //   '8-s',
  //   '7-s',
  //   '6-s',
  //   '5-s',
  //   '4-s',
  //   '3-s',
  //   '2-s',
  // ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
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

  const playDeck = shuffle([...deck, ...deck, ...deck, ...deck, ...deck]);
  console.log(playDeck, 'playDeck');

  const placeBet = e => {
    setBet1(e.target.value);
    e.preventDefault();
    console.log(`you bet ${e.target.value}`);
  };
  const startGame = () => {
    let players = [player1, player2, player3, player4, dealer];
    let activePlayers = players.filter(player => {
      return player.bet > 0;
    });
    console.log(activePlayers);
  };

  const hit = () => {};
  const doubleDown = () => {};
  const stay = () => {};
  return (
    <div className="App">
      <div className="dealer-cards">
        <p>Dealer Cards</p>
      </div>
      <div className="player-cards">
        <p>Player Cards</p>
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
