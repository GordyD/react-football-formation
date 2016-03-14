import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

import  { ItemTypes } from '../constants/ItemTypes';

import './AvailablePlayers.styl';

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
    this.state = {
      ALL: true,
      GK: true,
      DF: true,
      DM: true,
      MF: true,
      AM: true,
      ST: true
    };
  }

  togglePosition(position) {
    if (position === 'ALL') {
      let val = !this.state['ALL'];
      this.setState({
        ALL: val,
        GK: val,
        DF: val,
        DM: val,
        MF: val,
        AM: val,
        ST: val
      });
    } else {
      this.setState({ [position] : !this.state[position] });
    }
  }

  render() {
    let self = this;
    let filterKeys = Object.keys(this.state);
    let filterChecks = Object.keys(this.state).map((key) => {
      return <div key={key} className='AvailablePlayers-Filter'>
        <label>{key}</label>
        <input 
          name={key}
          type='checkbox' 
          checked={self.state[key]} 
          onChange={self.togglePosition.bind(self, key)}
          onClick={self.togglePosition.bind(self, key)}
        />
      </div>
    });

    let checkedFilterKeys = Object.keys(this.state).filter((filter) => !!this.state[filter]);
    let filteredChildren = this.props.children.filter((player) => {
      return player.props.validPositions.reduce((prev, current) => prev || checkedFilterKeys.includes(current.key), false);
    });

    return this.props.connectDropTarget(
      <div className='AvailablePlayers-Container'>
        <h2>Available Players</h2>
        <div className='AvailablePlayers-Filters'>
          {filterChecks}
        </div>
        <div className='AvailablePlayers-List'>
          {filteredChildren}
        </div>
      </div>
    );
  }
}

export default DropTarget(ItemTypes.PLAYER, sectorTarget, collect)(AvailablePlayers);