import React from 'react';
import './Reservation.css';

const Reservation = (props) => {

  const {name, date, time, number} = props.reservation;

  return (
    <div className="reservation-card">
      <h3>{name}</h3>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>{number} guests</h3>
      <button className="cancel-button">Cancel</button>
    </div>
  )
}

export default Reservation;
