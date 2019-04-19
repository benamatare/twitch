import React, { Component } from "react";
import "../css/loading.css";

const Spinner = require("react-spinkit");

const Loading = () => {
  return (
    <div className="load">
      <Spinner name="wave" />
    </div>
  );
};

export default Loading;
