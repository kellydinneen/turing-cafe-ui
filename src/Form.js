import React, { Component } from 'react';
import { fetchReservations, addReservation } from './apiCalls';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      resName: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  makeReservation = async (event) => {
    event.preventDefault();
    const reservation = {
      id: Date.now(),
      name: this.state.resName,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    };
    await addReservation(reservation);
    // const reservations = await fetchReservations();
  }

  render() {

    const { resName, date, time, number } = this.state;

    return (
      <form className="reservation-card">
        <input type='text'
              placeholder='Name'
              name='name'
              value={resName}
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
        <button onClick={this.makeReservation}>Make Reservation</button>
      </form>
    )
  }

}

export default Form;
