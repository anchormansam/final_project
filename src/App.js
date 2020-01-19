import React from 'react';
import './App.css';
import Time from './Time.js'
import Countdown from './Countdown.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TicTacToe from './Components/TicTacToe/index'




function App() {
  return (

    <div className="App">
      <React.Fragment>
        <Time />
        <Countdown endDate={'January 19, 2020 00:00:00'} />
        <TicTacToe />
        <p>This is where the Calculator will go!</p>
      </React.Fragment>
    </div>
  );
}

export default App;
