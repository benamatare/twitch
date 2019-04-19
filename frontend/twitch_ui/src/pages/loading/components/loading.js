<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from "react";
=======
import React from "react";

>>>>>>> 530facd989e4bbd134a653491e282fbeaaa6f143
import "../css/loading.css";

const Spinner = require("react-spinkit");

const Loading = () => {
  return (
<<<<<<< HEAD
    <div className="load">
=======
    <div className="block__loading">
>>>>>>> 530facd989e4bbd134a653491e282fbeaaa6f143
      <Spinner name="wave" />
    </div>
  );
};
=======

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
>>>>>>> cca4b461057685f2bea78e82cab4905048c5ba46

<<<<<<< HEAD
export default Loading;
=======
export default Loading;
<<<<<<< HEAD
>>>>>>> 530facd989e4bbd134a653491e282fbeaaa6f143
=======
>>>>>>> cca4b461057685f2bea78e82cab4905048c5ba46
