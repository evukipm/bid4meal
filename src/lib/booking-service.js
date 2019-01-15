import axios from 'axios';

class Booking {
  constructor() {
    this.booking = axios.create({
      baseURL: 'https://api.myjson.com/bins/18kn8w',
    });
  }

  getBooking() {
    return this.booking.get('/')
      .then(({ data }) => data);
  }

  getMeals() {
    return this.booking.get('/')
      .then(({ data }) => data);
  }

  sendMeals(selection) {
    // mocked call to server
    // return this.booking.put('/selection', {selection}); for example
  }
}

const booking = new Booking();

export default booking;
