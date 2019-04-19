import React from "react";
import ReactDOM from "react-dom";
import './index.css'

import App from "./pages/app/components/App";

console.log('REACT VERSION:',React.version)

ReactDOM.render( <App />, 
    document.getElementById("root")
);
