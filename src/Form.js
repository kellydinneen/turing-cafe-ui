import React from 'react';
import './Form.css';

const Form = (props) => {

  const {name, date, time, number} = props.reservation;

  return (
    <form className="reservation-card">
      <input type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.updateForm}>
      </input>
      <input type='text'
            placeholder='Date (mm/dd)'
            name='date'
            value={date}
            onChange={this.updateForm}>
      </input>
      <input type='text'
            placeholder='Time (hh:mm am/pm)'
            name='time'
            value={time}
            onChange={this.updateForm}>
      </input>
      <input type='text'
            placeholder='Number of guests'
            name='number'
            value={number}
            onChange={this.updateForm}>
      </input>
      <button>Make Reservation</button>
    </form>
  )
}

export default Reservation;
