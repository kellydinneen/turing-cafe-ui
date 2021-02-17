export const fetchReservations = () => {
  return fetch(`http://localhost:3001/api/v1/reservations`)
  .then(res => {
    if (!res.ok) {
        return `${res.status} error. Sorry! Something went wrong! Try again later.`
      } else {
        return res.json()
      }})
  }
