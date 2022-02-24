console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Pseudo Code

// storage created for players and their current hands
// storage created for ranks
// storage created for suits
// empty deck created

// createDeck //
// loop through rank array
// loop through suit array
// for every suit, assign one of every rank for it (4 x 13)
// return 52 cards

// shuffleDeck //
// loop through the argument deck
// create variable "temporary" for each element in deck
// create variable "randomizer" that creates a random number within the scope of the deck's length (any number between 0 and 51)
// assign deck[random number between 0 and 51] to deck[i] to reshuffle index location of said card within the deck array
// assign temporary to deck[randomizer]
// **once all 52 cards are reached using the loop, this function terminates and returns the deck**

// dealDeck //
// loop through players array
// assign an array with 2 card objects from the deck to variable "drawedCards"
// assign player element to const variable player
// drawedCards is assigned to the hand property of the player object
// return players

// calculateScores //
// loop through the players array
// assign 0 to "let" variable sum
// assign player elements to const variable player
// assign hand property of player object to const variable playerHand
// assign name property of player object to const variable playerName
// if the name argument and player name are equal,
// loop through that player's hand
// and assign card elements in the player's hand to const variable "card"
// if the rank of any of the cards is equal to jack, queen or king,
// the Rank property of said card is equal to 10
// or if the card's rank is Ace
// the Rank property of said card is equal to 11
// add the rank of each card in the players hand to variable "sum"
// and return the sum

// winner //
// assign calcualtionScores function call with argument 'Nelson' to const variable playerOneScore
// assign calcualtionScores function call with argument 'Tim' to const variable playerTwoScore
// assign calcualtionScores function call with argument 'Cody' to const variable playerThreeScore
// assign calcualtionScores function call with argument 'Cassandra' to const variable playerFourScore
// assign the biggest number out of all the scores to variable winningScore
// the player with the biggest score is logged to the console

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
    var temporary = deck[i];
    var randomizer = Math.floor(Math.random() * deck.length);
    deck[i] = deck[randomizer];
    deck[randomizer] = temporary;
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
  const playerOneScore = calculateScores('Nelson');
  const playerTwoScore = calculateScores('Tim');
  const playerThreeScore = calculateScores('Cody');
  const playerFourScore = calculateScores('Cassandra');
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
