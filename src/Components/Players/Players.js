import React from 'react';
import "./Players.css"
const Players = (props) => {
    const {name,team_logo,team_name,role,event_player_credit}=props.player
    return (
        <div className="style">
        <img  src={team_logo} alt="" />
         <p>Name :- {name}</p>
         <p>Team :- {team_name}</p>
         <p>Role :- {role}</p>
         <p>Credit :- {event_player_credit}</p>
         <button onClick={()=>props.handleEvent(props.player)}>Select for Final Team</button>
        </div>
    );
};

export default Players;
