/** @jsx React.DOM  */
'use strict';

var React = require('react'),
  Team = require('./../domain/Team'),
  Button = require('react-bootstrap/Button'),
  PlayerInput = require('./PlayerInput'),
  AddAwayTeam;

AddAwayTeam = React.createClass({
  displayName: function() {
    return 'AddAwayTeam';
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var player1 = document.getElementById('player1').value,
      player2 = document.getElementById('player2').value;

    if (!player2) {
      document.getElementById('player2').focus();
      return;
    }

    this.props.match.addAwayTeam(new Team(player1, player2));

    this.props.changeState(
      {show: 'Scoreboard'}
    );
  },

  componentDidMount: function() {
    document.getElementById('player1').focus();
  },

  render: function() {
    return (
      <div className="panel panel-default" >
        <div className="panel-heading">
          <h2>Add Away Team</h2>
        </div>
        <div className="panel-body">
          <form className="add-team-form" onSubmit={this.handleSubmit}>
            <PlayerInput />
            <Button type="submit" bsStyle="primary" className="pull-right">
              Add Team
            </Button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = AddAwayTeam;
