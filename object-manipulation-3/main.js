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
