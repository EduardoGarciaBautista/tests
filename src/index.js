import React from "react";
import './index.css'
import ReactDOM from 'react-dom';
import CounterApp from "./CounterApp";
import App from "./App";

const divRoot = document.getElementById('root');

ReactDOM.render(<CounterApp value={20}/>, divRoot)

// ReactDOM.render(<App greet='Hola Hey'/>, divRoot)
