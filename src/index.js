import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import {ElementApp} from './store/index';
import {Provider} from 'react-redux';



ReactDOM.render(<Provider store={ElementApp}><App/></Provider>
, document.getElementById("root"));
