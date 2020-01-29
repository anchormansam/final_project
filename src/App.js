import React from 'react';
import './App.css';
import Time from './Time.js'
import Countdown from './Countdown.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TicTacToe from './Components/TicTacToe/index';
import Cal from './Components/Calculator/Cal'




function App() {
  return (

    <div className="App">
      <React.Fragment>
        <Time />
        <Countdown endDate={'January 29, 2020 00:00:00'} />
        <TicTacToe />
        <Cal />
      </React.Fragment>
    </div>
  );
}

export default App;
