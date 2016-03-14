import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

import cx from 'classnames';
import request from 'superagent';

import './FormationSector.styl';

import { GK, OUTFIELD_POSITION_TYPES } from '../constants/positions';
import  { ItemTypes } from '../constants/ItemTypes';

import * as utils from '../utils';

const sectorTarget = {
  drop(props, monitor) {
    return {
      id: props.id
    }
  },
  canDrop(props, monitor) {
    let sector = props;
    let player = monitor.getItem();
    let playerInSector = utils.getPlayerInSector(sector);
    let validPosition = utils.isValidSectorForPlayer(sector, player);
    let legalSwap = (!player.isOnPitch || !playerInSector || utils.isValidSectorForPlayer(utils.getSectorInfo(player.assignedSector), playerInSector));

    return validPosition && legalSwap && (player.isOnPitch || sector.playersOnPitch.length < utils.VALID_TEAM_SIZE);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver()
  }
}

class FormationSector extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    position: PropTypes.object,
    side: PropTypes.object,
    playersOnPitch: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
  }

  onClick() {
    console.log(this.props.position, this.props.side);
  }

  render() {
    let classes = cx(
      'FormationSector', 
      `FormationSector-${this.props.position.className}`, 
      `FormationSector-${this.props.side.className}`,
      { 'FormationSector-DragOver': this.props.isOver },
      { 
        'FormationSector-CanDrop': this.props.isOver && this.props.canDrop,
        'FormationSector-CannotDrop': this.props.isOver && !this.props.canDrop,  
      }
    );

    return this.props.connectDropTarget(
      <div key={this.props.id} className={classes} onClick={this.onClick.bind(this)}>
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, sectorTarget, collect)(FormationSector);