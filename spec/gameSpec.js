var Game = require('../js/game')

describe('a game', function() {

  it('does not have a running total by default', function() {
    var game = new Game();
    expect(game.runningScore).toEqual(0);
  });

  it('should add the frame score to the running total', function() {
    expect(game.runningScore).toEqual(7);
  });

});