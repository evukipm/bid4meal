import React, { Component } from 'react';

export default class Meals extends Component {
  render() {
    const { passenger } = this.props;
    console.log(passenger);
    return (
      <div>
        Hi,
        {' '}
        {passenger.firstName}
!
      </div>
    );
  }
}
