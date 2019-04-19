
import React, { Component } from 'react';
import '../css/loading.css'

const Spinner = require('react-spinkit');

export default class Loading extends Component {
  render() {
    return (
      <div className='load'>
          <Spinner name='wave' />
      </div>
    )
  }
}

export default Loading;
