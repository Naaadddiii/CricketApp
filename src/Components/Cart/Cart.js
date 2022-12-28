import React, { useState } from 'react';


const Cart = (props) => {
    const {length}= props.plyer;
    const Credit = props.plyer.reduce((x,y)=>x+y.event_player_credit,0)
    const plyer = length > 11 ? props.plyer.slice(0, 11) : props.plyer;
    return (
        <div className="cart">
            <p>Total Selected Player :- {plyer.length}</p>
            <p>Total Credit :- {Credit}</p>
            <p>All selected player Name :-</p>
            <ul> 
            {
                plyer.map((x,y)=><li key={y}>{x.name}</li>)
            }
            </ul>
        </div>
    );
};


export default Cart;


