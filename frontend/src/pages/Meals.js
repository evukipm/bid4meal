import React, { Component } from 'react'

import booking from '../lib/booking-service';

export default class Meals extends Component {

  state ={
    loading: true,
  }

  verifyPassenger(){
    booking.getPassenger()
    .then(result => {
      const passengers = result.booking.passengers;
      const urlPassenger = this.props.match.params.name;

      for (let i = 0; i < passengers.length; i++) {
        if (passengers[i].lastName === urlPassenger) {
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
    this.verifyPassenger()
    const {passenger, exists} = this.state;
    return (
      <div>
        {exists ? <div>Hi, {passenger.firstName}!</div> : <div>No exists</div>}
      </div>
    )
  }
}

