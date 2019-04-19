import React from "react";

import "../css/loading.css";

const Spinner = require("react-spinkit");

const Loading = () => {
  return (
    <div className="block__loading">
      <Spinner name="wave" />
    </div>
  );
};

export default Loading;