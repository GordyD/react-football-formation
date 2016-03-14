import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

import  { ItemTypes } from '../constants/ItemTypes';

import cx from 'classnames';

const sectorTarget = {
  drop(props, monitor) {
    return {
      id: props.id
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}

class AvailablePlayers extends Component {
  static propTypes = {
    isOver: PropTypes.bool.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  onClick() {
    console.log(this.props.position, this.props.side);
  }

  render() {
    let classes = cx(
      'FormationViewer-AvailablePlayers',
    );

    return this.props.connectDropTarget(
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, sectorTarget, collect)(AvailablePlayers);