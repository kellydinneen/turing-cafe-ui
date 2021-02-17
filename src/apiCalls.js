export const fetchReservations = () => {
  return fetch(`http://localhost:3001/api/v1/reservations`)
  .then(res => {
    if (!res.ok) {
        return `${res.status} error. Sorry! Something went wrong! Try again later.`
      } else {
        return res.json()
      }})
  }

  export const addReservation = (reservation) => {
    const post = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(reservation)
      }
    return fetch(`http://localhost:3001/api/v1/reservations`, post)
      .then(res => {if (!res.ok) {
          return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`;
        } else {
          return res.json();
        }})
  }

  export const cancelReservation = (reservationID) => {
    const delete = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      }
    return fetch(`http://localhost:3001/api/v1/reservations/${reservationID}`, delete)
      .then(res => {if (!res.ok) {
          return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`;
        } else {
          return res.json();
        }})
  }
