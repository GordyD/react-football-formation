import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

import cx from 'classnames';

import './Player.styl';

import { GK, OUTFIELD_POSITION_TYPES } from '../constants/positions';
import  { ItemTypes } from '../constants/ItemTypes';

const playerSpec = {
  canDrag(props) {
    return true;
  },
  beginDrag(props, monitor, component) {
    return { 
      id: props.id,
      validPositions: props.validPositions 
    };
  },
  isDragging(props, monitor) {
    return monitor.getItem().id === props.id;
  },
  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (dropResult) {
      props.onSelect(props.id, dropResult.id)
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Player extends Component {
  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
    validPositions: PropTypes.array.isRequired,
    assignedSector: PropTypes.number,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  onClick() {
    console.log(this.props.firstName, this.props.lastName);
  }

  render() {
    let classes = cx(
      'Player', 
      { 'Player-Dragging': this.props.isDragging }
    );

    let inlineStyle = {
      backgroundImage: `url(${this.props.image})`
    }

    return this.props.connectDragSource(
      <div 
        key={this.props.id} 
        className={classes} 
        onClick={this.onClick.bind(this)}
        style={inlineStyle}
        >
      </div>
    );
  }
}

export default DragSource(ItemTypes.PLAYER, playerSpec, collect)(Player);