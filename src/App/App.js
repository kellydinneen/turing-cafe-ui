import React, { Component } from 'react';
import { fetchReservations } from '../apiCalls';
import Reservation from '../Reservation';
import Form from '../Form';
import './App.css';

class App extends Component {
  constructor() {
  super()
  this.state = {
    reservations: [],
    isLoading: true,
    errorMsg: null,
  }
}

updateReservations = (updatedReservations) => {
  this.setState({reservations: updatedReservations});
}

componentDidMount() {
    fetchReservations()
        .then(result =>{
          if (typeof(result) !== 'object') {
            this.setState({
              isLoading: false,
              errorMsg: result
            })
          } else {
            this.setState({
                reservations: result,
                isLoading: false
              })
          }})
  }

  render() {
    const allReservations = this.state.reservations.map(reservation => {
      return (
        <Reservation
          reservation={reservation}
          key={reservation.id}
          updateReservations={this.updateReservations}
        />
      )
    })

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form
          updateReservations={this.updateReservations}
        />
        <div className='resy-container'>
         {allReservations}
        </div>
      </div>
    )
  }
}

export default App;
