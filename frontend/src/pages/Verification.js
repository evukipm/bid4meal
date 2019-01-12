import React, { Component } from 'react'
import queryString from 'query-string';

import booking from '../lib/booking-service';
import Loading from './Loading';
import Meals from './Meals';

class Verification extends Component {

  state ={
    loading: true,
  }

  componentDidMount() {
    this.verifyPassenger();
  }

  verifyPassenger(){
    booking.getPassenger()
    .then(result => {
      let parsed = queryString.parse(this.props.location.search);
      const passengers = result.booking.passengers;
      const firstname = parsed.first.trim().toLowerCase();
      const lastname = parsed.last.trim().toLowerCase();

      for (let i = 0; i < passengers.length; i++) {
        console.log(passengers)
        if (passengers[i].firstName.trim().toLowerCase() === firstname && passengers[i].lastName.trim().toLowerCase() === lastname) {
          this.setState({
            exists: true,
            passenger: passengers[i],
            loading: false,
          })
        }else{
          this.setState({
            loading: false,
            exists: false,
          })
        }
      }
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    const {passenger, exists, loading} = this.state;
    return (
      <div>
        {loading ? <Loading /> : exists ? <Meals passenger={passenger} /> : <div>No exists</div>}
      </div>
    )
  }
}

export default Verification;
