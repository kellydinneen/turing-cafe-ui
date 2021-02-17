import React from 'react';
import { fetchReservations, deleteReservation } from './apiCalls';
import './Reservation.css';

const Reservation = (props) => {

  const {id, name, date, time, number} = props.reservation;

  const cancelReservation = async () => {
    await deleteReservation(id);
    const reservations = await fetchReservations();
    props.updateReservations(reservations);
  }

  return (
    <div className="reservation-card">
      <h3>{name}</h3>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>{number} guests</h3>
      <button className="cancel-button" onClick={cancelReservation}>Cancel</button>
    </div>
  )
}

export default Reservation;
