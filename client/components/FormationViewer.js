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

import './FormationViewer.styl';

const SECTORS = 35;
const ROWS = 7;

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

  selectPlayer(id, positionId) {
    var oldAssignedSector = null;
    var swapPlayerId = null;
    var players = this.state.players.map((p) => {
      if (p.assignedSector === positionId) {
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

  renderAvailablePlayers() {
    return this.getAvailablePlayers().map((player) => {
      return (
        <Player key={player.id} {...player} onSelect={this.selectPlayer.bind(this)} />
      );
    })
  }

  renderOutfieldSectors() {
    let keyDelta = 2;
    let self = this;

    return _.range(SECTORS).map((id) => {
      let positionId = (OUTFIELD_POSITION_TYPES.length -1 ) - Math.floor(id/ROWS);
      let positional = POSITIONALS[id%ROWS];
      let player = null;
      let players = self.state.players.filter((p) => p.assignedSector === (id+keyDelta));

      if (players.length === 1) {
        player = <Player key={players[0].id} {...players[0]} onSelect={this.selectPlayer.bind(this)} />
      }
      return (
        <FormationSector 
          key={`outfield-${id+keyDelta}`} 
          id={id+keyDelta} 
          position={OUTFIELD_POSITION_TYPES[positionId]}
          side={positional}
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
      <FormationSector id={1} position={GK} side={POSITIONALS[Math.round(POSITIONALS.length/2)]}>
        {goalkeeper}
      </FormationSector>
    );
  }

  render() {
    return (
      <div className='FormationViewer-Container'>
        <div className='FormationViewer-Formation'>
          {this.renderOutfieldSectors()}
          {this.renderGoalkeeperSector()}
        </div>
        <div>
          <h2>Available Players {this.getAvailablePlayers().length}</h2>
        </div>
        <AvailablePlayers>
          {this.renderAvailablePlayers()}
        </AvailablePlayers>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(FormationViewer);