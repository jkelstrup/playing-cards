(function () {
  
  this.Card = function(rank, suit) {
    var rank = rank;
    var suit = suit;
    var rankLiteral;

    switch (rank) {
      case 1:
        rankLiteral = "Ace";
        break;
      case 2:
        rankLiteral = "Deuce";
        break;
      case 11:
        rankLiteral = "Jack";
        break;
      case 12:
        rankLiteral = "Queen";
        break;
      case 13:
        rankLiteral = "King";
        break;
      default:
        rankLiteral = rank;
    }

    function literal() {
      var res = "";

      if (suit === "Joker") {
        res = "Joker";
      } else {
        res = rankLiteral + " of " + suit;
      }

      return res;
    }

    function code() {
      var r = rankLiteral.toString().charAt(0).toUpperCase();
      var s = suit.charAt(0).toLowerCase();

      return r + s;
    }

    return {
      rank: rank,
      suit: suit,
      literal: literal,
      code: code
    }

  }
})();