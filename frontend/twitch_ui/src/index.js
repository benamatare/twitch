import React from "react";
import ReactDOM from "react-dom";

import App from '../src/pages/app/components/App'
import './index.css'


console.log('REACT VERSION:',React.version)

ReactDOM.render( <App />, 
    document.getElementById("root")
);
