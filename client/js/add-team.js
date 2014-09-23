/** @jsx React.DOM  */
'use strict';

var React = require('react');


var AddTeam = React.createClass({

    handleSubmit: function (e) {
        e.preventDefault();

        var player1 = this.refs.player1.getDOMNode().value.trim();
        var player2 = this.refs.player2.getDOMNode().value.trim();
        if (!player2 || !player1) {
            console.error("Fyll inn navn");
            return;
        }

        this.props.submitFunc(player1, player2);
        this.props.showNext();
    },

    render: function () {
        return (
            <div>
                <h3>Add team {this.props.team.teamInital}</h3>
                <form className="add-team-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input autofocus={this.props.af} type="text" className="form-control" ref="player1" placeholder={this.props.team.player1}></input>
                    </div>
                    <div className="form-group">
                        <input  type="text" className="form-control" ref="player2" placeholder={this.props.team.player2}></input>
                    </div>
                    <button type="submit" className="btn btn-primary  pull-right">Add Team</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTeam;