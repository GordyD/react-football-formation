import React, { PropTypes, Component } from 'react';

import moment from 'moment';

import FormationViewer from '../components/FormationViewer';

import './AppContainer.styl';

export default class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      formation: {
        defenders: 4,
        midfielders: 5,
        forwards: 1
      }
    };
  }

  render() {
    return <div className='AppContainer'>
      <FormationViewer formation={this.state.formation}/>
    </div>
  }
}