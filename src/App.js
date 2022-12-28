import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart.js';
import Players from './Components/Players/Players.js';
import Data from './Components/Data/Data';
function App() {
  const [player,setPlayer]=useState(Data)
  const [plyer,setPlyer]= useState([]);
  const handleEvent = (dt) => {
    const playerAlreadySelected = plyer.find(player => player.name === dt.name);
    if (playerAlreadySelected) {
      alert(`${dt.name} has already been selected.`);
    } else {
      const playersFromSameTeam = plyer.filter(player => player.team_name === dt.team_name).length;
      if (playersFromSameTeam >= 7) {
        alert(`You have reached the maximum number of players from ${dt.team_name}`);  
      }
    const totalCredit = plyer.reduce((total, player) => total + player.event_player_credit, 0);
    if (totalCredit + dt.event_player_credit > 100) {
      alert(`You have exceeded the maximum credit limit of 100. The current credit is ${totalCredit}.`);
     } else {
        setPlyer([...plyer, dt]);
      }
    }
  };
  return (
    <div>
    <h3 style={{textAlign: 'center'}}>Total player - {player.length}</h3>
     <div className="grid">
            <div className="inner-grid">
              {
                  player.map((x,idx)=> 
                  <Players key={idx} handleEvent={handleEvent}  player={x}/>)
              }
            </div>
          <div>
                <Cart plyer={plyer}/>
          </div>

     </div>
    </div>
  );
}

export default App;