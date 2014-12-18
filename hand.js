(function () {
  this.Hand = function () {
    var hand = [];

    function receive(cards) {
      cards.forEach(function(card) {
        hand.push(card);
      });
    }

    function showHand() {
      var string = "";

      hand.forEach(function(card) {
        string += card.literal() + "\n";
      });

      return string;
    }

    function indexOfCard(c) {
      var index = hand.indexOf(c);

      return index;
    }

    function remove(i) {
      var card;

      if (index > -1) {
        card = hand[index];
        hand.splice(index, 1);
      }

      return card;
    }

    return {
      hand: hand,
      receive: receive,
      showHand: showHand,
      indexOfCard: indexOfCard
    }
  }
})();