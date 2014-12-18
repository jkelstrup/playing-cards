(function () {
  this.Deck = function (options) {
    var settings = {
      decks: 1,
      jokers: 0
    }

    var stack = [];
    var usedCards = [];

    // set settings passed by the user
    if (options) {
      // loop attributes in object 'options'
      for (var attribute in options) {
        if (options.hasOwnProperty(attribute)) {
         settings[attribute] = options[attribute];
        }
      }
    }

    for (var i = 0; i < settings.decks; i++) {
      buildDeck();
    }

    addJokers(settings.jokers);

    function buildDeck() {
      for (var i = 0; i < 52; i++) {
        var rank = i % 13 + 1;
        var suit;

        if (i < 13) {
          suit = "Spades";
        } else if (i < 26) {
          suit = "Hearts";
        } else if (i < 39) {
          suit = "Diamonds";
        } else {
          suit = "Clubs";
        }

        var card = new Card(rank, suit);

        stack.push(card);
      }
    }

    function addJokers(n) {
      for (var i = 0; i < n; i++) {
        var joker = new Card(0, "Joker");
        stack.push(joker);
      }
    }

    function stringify(array) {
      var string = "";

      array.forEach(function(card) {
        string += card.literal() + "\n";
      });

      return string;
    }

    function currentStack() {
      return stringify(stack);
    }

    function listUsedCards() {
      return stringify(used);
    }

    function deal(num) {
      var hand = [];

      for (var i = 0; i < num; i++) {
        var card = stack.pop();
        usedCards.push(card);
        hand.push(card);
      }

      return hand;
    }

    function shuffle() {
      var o = stack;
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    };

    return {
      stack: stack,
      currentStack: currentStack,
      usedCards: listUsedCards,
      shuffle: shuffle,
      deal: deal
    }
  }
})();