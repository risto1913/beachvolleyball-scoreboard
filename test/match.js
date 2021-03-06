var should = require('should'),
  sinon = require('sinon'),
  Match = require('./../src/js/domain/Match'),
  Set = require('./../src/js/domain/Set'),
  Team = require('./../src/js/domain/Team'),
  matchTestUtil = require('./match-test-util');

describe('Match Logic', function() {

  it('Adding Hometeam', function() {
    var match = new Match(),
      hometeam = new Team('player1', 'player2');
    match.addHomeTeam(hometeam);
    match.state.hometeam.should.eql(hometeam);
  });

  it('Adding Awayteam', function() {
    var match = new Match(),
      awayteam = new Team('player3', 'player4');
    match.addAwayTeam(awayteam);
    match.state.awayteam.should.eql(awayteam);
  });

});

describe('Test Match Util functions', function() {
  var option = {
    length: 21,
    switch: 7
  };

  it('Setting state', function() {
    var match,
      score = [new Set(option), new Set(option), new Set(option)];
    score[0].scoreForThisTeam = [19, 21];
    score[1].scoreForThisTeam = [23, 21];
    score[2].scoreForThisTeam = [13, 14];
    match = matchTestUtil.setScoreToTest(score);
    match.state.currentSet.should.be.equal(2);
    match.state.currentSetScore.should.eql([13, 14]);
  });
});
