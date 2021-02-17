import React, { Component } from 'react';
import { fetchReservations } from '../apiCalls';
import Reservation from '../Reservation';
import Form from '../Form';
import Menu from '../Menu';
import './App.css';

class App extends Component {
  constructor() {
  super()
  this.state = {
    reservations: [],
    isLoading: true,
    errorMsg: null,
    showMenu: false
  }
}

updateReservations = (updatedReservations) => {
  this.setState({reservations: updatedReservations});
}

revealMenu = () => {
  this.setState({showMenu: true});
}

hideMenu = () => {
  this.setState({showMenu: false});
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
        <button onClick={this.revealMenu}>Menu</button>
        <button onClick={this.hideMenu}>Home</button>
        {!this.state.showMenu &&
          <>
            <Form
              updateReservations={this.updateReservations}
            />
            <div className='resy-container'>
             {allReservations}
            </div>
          </>
        }
        {this.state.showMenu &&
          <Menu/>
        }
      </div>
    )
  }
}

export default App;
