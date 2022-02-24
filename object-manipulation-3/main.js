console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [{ name: 'Nelson', hand: '' }, { name: 'Tim', hand: '' }, { name: 'Cody', hand: '' }, { name: 'Cassandra', hand: '' }];
var rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
var suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
var deck = [];

function createDeck() {
  for (var i = 0; i < rank.length; i++) {
    for (var j = 0; j < suit.length; j++) {
      var card = { Rank: rank[i], Suit: suit[j] };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (var i = 0; i < deck.length; i++) {
    var temp = deck[i];
    var randomizer = Math.floor(Math.random() * deck.length);
    deck[i] = deck[randomizer];
    deck[randomizer] = temp;
  }
  return deck;
}

const dealDeck = deck => {
  for (let i = 0; i < players.length; i++) {
    const drawedCards = deck.splice(0, 2);
    const player = players[i];
    player.hand = drawedCards;
  }
  return players;
};

const calculateScores = name => {
  for (let i = 0; i < players.length; i++) {
    let sum = 0;
    const player = players[i];
    const playerHand = player.hand;
    const playerName = player.name;
    if (name === playerName) {
      for (let j = 0; j < playerHand.length; j++) {
        const card = playerHand[j];
        if (card.Rank === 'Jack' || card.Rank === 'Queen' || card.Rank === 'King') {
          card.Rank = 10;
        } else if (card.Rank === 'Ace') {
          card.Rank = 11;
        }
        sum += card.Rank;
      }
      return sum;
    }
  }
};

const winner = () => {
  const playerOneScore = calculateScores('Art');
  const playerTwoScore = calculateScores('Judson');
  const playerThreeScore = calculateScores('Claire');
  const playerFourScore = calculateScores('Dan');
  const winningScore = Math.max(playerOneScore, playerTwoScore, playerThreeScore, playerFourScore);
  if (winningScore === playerOneScore) {
    console.log('The winner is Nelson!');
  } else if (winningScore === playerTwoScore) {
    console.log('The winner is Tim!');
  } else if (winningScore === playerThreeScore) {
    console.log('The winner is Cody!');
  } else if (winningScore === playerFourScore) {
    console.log('The winner is Cassandra!');
  }
};

var currentDeck = createDeck();
shuffleDeck(currentDeck);
dealDeck(currentDeck);
winner();
