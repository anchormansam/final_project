import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Time from './Time.js'
import Countdown from './Countdown.js'
import Tile from './Components/Tile'
import TicTacToeContainer from './Components/TicTacToeContainer'
import Board from './Components/Board'



function App() {
  // const handleClick () => {
  //   alert('did this work');
  // }
  return (

    <div className="App">
      <React.Fragment>
        <Button />
        <Time />
        <Countdown endDate={'December 6, 2019 17:00:00'} />
        {/* <Countdown endDate={'October 18, 2019 09:50:00'}/> */}
       <TicTacToeContainer />
       <Board />
       
      </React.Fragment>


    </div>
  );
}

export default App;
