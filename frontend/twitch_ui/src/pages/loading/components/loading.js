import React, { Component } from 'react';
import '../css/loading.css'

const Spinner = require('react-spinkit');

export default class Loading extends Component {
  render() {
    return (
      <div className='loading-screen-parent'>
          <Spinner name='wave' />
      </div>
    )
  }
}