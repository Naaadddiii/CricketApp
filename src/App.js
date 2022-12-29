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
      }else {
        if (dt.role === "Batsman") {
          const batsmenCount = plyer.filter(player => player.role === "Batsman").length;
          if (batsmenCount > 3 || batsmenCount < 7) {
            setPlyer([...plyer, dt]);
          } else {
            alert(`You have reached the maximum number of batsmen.`);
          }
        } else if (dt.role === "Wicket-Keeper") {
          const wicketkeeperCount = plyer.filter(player => player.role === "Wicket-Keeper").length;
          if (wicketkeeperCount > 1 || wicketkeeperCount < 5) {
            setPlyer([...plyer, dt]);
          } else {
            alert(`You have reached the maximum number of wicketkeepers.`);
          }
        } else if (dt.role === "All-Rounder") {
          const allRounderCount = plyer.filter(player => player.role === "All-Rounder").length;
           if ( allRounderCount < 4) {
           setPlyer([...plyer, dt]);
        } else {
            alert(`You have reached the maximum number of all-rounders.`);
         }
        } else if (dt.role === "Bowler") {
            const bowlerCount = plyer.filter(player => player.role === "Bowler").length;
            if (bowlerCount > 3 || bowlerCount < 7) {
            setPlyer([...plyer, dt]);
        } else {
            alert(`You have reached the maximum number of bowlers.`);
            }
       } else {
             setPlyer([...plyer, dt]);
       }
     }
      const totalCredit = plyer.reduce((total, player) => total + player.event_player_credit, 0);
      if (totalCredit + dt.event_player_credit > 100) {
        alert(`You have exceeded the maximum credit limit of 100. The current credit is ${totalCredit}.`);
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
