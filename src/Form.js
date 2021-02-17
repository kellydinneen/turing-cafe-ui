import React, { Component } from 'react';
import { fetchReservations, addReservation } from './apiCalls';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: '',
      time: '',
      number: '',
      personName: ''
    }
  }

  updateForm = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  makeReservation = async (event) => {
    event.preventDefault();
    const reservation = {
      id: Date.now(),
      name: this.state.personName,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    };
    await addReservation(reservation);
    this.setState({
      date: '',
      time: '',
      number: '',
      personName: ''
    });
    const reservations = await fetchReservations();
    this.props.updateReservations(reservations);
  }

  render() {

    const { date, time, number, personName } = this.state;

    return (
      <form className="reservation-form">
        <input type='text'
              placeholder='Your Name'
              name='personName'
              value={personName}
              onChange={this.updateForm}>
        </input>
        <input type='text'
              placeholder='Date (mm/dd)'
              name='date'
              value={date}
              onChange={this.updateForm}>
        </input>
        <input type='text'
              placeholder='Time (hh:mm)'
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
