import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Time from './Time.js'
import Countdown from './Countdown.js'
import Tile from './Components/Tile'



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
        {/* <Countdown endDate={'October 17, 2019 20:11:00'}/> */}
       <div style={{height: '40px'}}>
       <Tile />Can you See This<Tile /><Tile />
       </div>
       <div style={{height: '40px'}}>
       <Tile /><Tile /><Tile />
       </div>
       <div style={{height: '40px'}}>
       <Tile /><Tile /><Tile />
       </div>

      

      </React.Fragment>


    </div>
  );
}

export default App;
