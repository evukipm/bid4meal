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

  getPassenger() {
    return this.booking.get('/')
      .then(({ data }) => data);
  }
}

const booking = new Booking();

export default booking;
