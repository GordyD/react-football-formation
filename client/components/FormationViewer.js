import React, { PropTypes, Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import _ from 'lodash';
import cx from 'classnames';
import request from 'superagent';

import Player from './Player';
import FormationSector from './FormationSector';
import AvailablePlayers from './AvailablePlayers';
import { GK, OUTFIELD_POSITION_TYPES, POSITIONALS } from '../constants/positions';
import playerSet from '../constants/players';
import * as utils from '../utils';

import './FormationViewer.styl';

class FormationViewer extends Component {
  static propTypes = {
    formation: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      players: playerSet
    }
  }

  componentDidMount() {
    if (window.localStorage && window.localStorage.getItem('selection')) {
      let selection = JSON.parse(window.localStorage.getItem('selection'));
      let players = this.state.players.map((player) => {
        selection.forEach((s) => {
          if (s.playerId === player.id) {
            player.assignedSector = s.sectorId;
          }
        });

        return player;
      });

      this.setState({players: players});
    }
  }

  clearSelection() {
    let players = this.state.players.map((player) => {
      player.assignedSector = null;

      return player;
    });

    this.setState({players: players});

    if (window.localStorage) {
      window.localStorage.removeItem('selection');
    }
  }

  saveSelection() {
    let savedTeam = this.state.players
    .filter((player) => (player.assignedSector !== null))
    .map((player) => { 
      return { playerId: player.id, sectorId: player.assignedSector } 
    });

    if (window.localStorage) {
      window.localStorage.setItem('selection', JSON.stringify(savedTeam));
    }
  }

  selectPlayer(id, positionId) {
    var oldAssignedSector = null;
    var swapPlayerId = null;
    var players = this.state.players.map((p) => {
      if (positionId !== null && p.assignedSector === positionId) {
        swapPlayerId = p.id;
        p.assignedSector = null;
      }

      if (p.id === id) {
        oldAssignedSector = (p.assignedSector) ? p.assignedSector: null;
        p.assignedSector = positionId;
      }

      return p;
    });

    if (oldAssignedSector !== null && swapPlayerId !== null) {
      players = this.state.players.map((p) => {
        if (p.id === swapPlayerId) {
          p.assignedSector = oldAssignedSector;
        }

        return p;
      });
    }

    this.setState({players});
  }

  getAvailablePlayers() {
    return this.state.players.filter((p) => !p.assignedSector);
  }

  getPlayersOnPitch() {
    return this.state.players.filter((p) => (!!p.assignedSector && p.assignedSector>= 0));
  }

  renderAvailablePlayers() {
    return this.getAvailablePlayers().sort(utils.sortAvailableList).map((player) => {
      return (
        <Player key={player.id} {...player} onSelect={this.selectPlayer.bind(this)} />
      );
    })
  }

  renderOutfieldSectors() {
    let keyDelta = 2;
    let self = this;

    return _.range(utils.SECTORS).map((id) => {
      let sectorInfo = utils.getSectorInfo(id+keyDelta);
      let player = null;
      let players = self.state.players.filter((p) => p.assignedSector === (id+keyDelta));

      if (players.length === 1) {
        player = <Player key={players[0].id} {...players[0]} onSelect={this.selectPlayer.bind(this)} />
      }
      return (
        <FormationSector 
          key={`outfield-${id+keyDelta}`} 
          id={id+keyDelta} 
          position={sectorInfo.position}
          side={sectorInfo.side}
          playersOnPitch={this.getPlayersOnPitch()}
        >
          {player}
        </FormationSector>
      )
    });
  }

  renderGoalkeeperSector() {
    var sectorId = 1;
    let goalkeeper = null;
    let players = this.state.players.filter((p) => p.assignedSector === (sectorId));

    if (players.length === 1) {
      goalkeeper = <Player key={players[0].id} {...players[0]} onSelect={this.selectPlayer.bind(this)} />
    }

    return (
      <FormationSector 
        id={sectorId} 
        position={GK} 
        side={POSITIONALS[Math.round(POSITIONALS.length/2)]}
        playersOnPitch={this.getPlayersOnPitch()}
      >
        {goalkeeper}
      </FormationSector>
    );
  }

  render() {
    var sortedPlayers = this.getPlayersOnPitch().sort(utils.sortTeamList);

    var playerList = sortedPlayers.map((p) => {
      var { position, side } = utils.getSectorInfo(p.assignedSector);
      return (
        <li key={p.id}>
          {` ${position.key} ${side.key}`} - {p.firstName}{(p.lastName) ? ' ' + p.lastName: ''} 
        </li>
      );
    });

    var formation = utils.getFormation(this.getPlayersOnPitch());

    var saveButton = (this.getPlayersOnPitch().length === utils.VALID_TEAM_SIZE) ?
      <button className='pure-button pure-button-primary' onClick={this.saveSelection.bind(this)}>Save</button> :
      <button className='pure-button-disabled' disabled>Save</button>;

    return (
      <div className='FormationViewer-Container'>
        <AvailablePlayers>
          {this.renderAvailablePlayers()}
        </AvailablePlayers>

        <div className='FormationViewer-Formation'>
          {this.renderOutfieldSectors()}
          {this.renderGoalkeeperSector()}
        </div>

        <div className='FormationViewer-Selection'>
          <h2>Your Team ({this.getPlayersOnPitch().length}/{utils.VALID_TEAM_SIZE})</h2>
          <p>Formation {utils.printFormationString(formation)}</p>
          <ul>
            {playerList}
          </ul>
          <div className='FormationViewer-Options'>
            <button className='pure-button' onClick={this.clearSelection.bind(this)}>Clear</button>
            {saveButton}
          </div>
        </div>
        
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(FormationViewer);