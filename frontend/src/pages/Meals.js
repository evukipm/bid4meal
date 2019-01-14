import React, { Component } from 'react';
import Info from '../components/Info';
import Journey from '../components/journey';

class Meals extends Component {
  render() {
    const { passenger, flight, meals } = this.props;
    const journeys = flight.journeys;

    return (
      <div>
        <Info passenger={passenger} />
        {journeys.map(journey => (
          <Journey
            key={journey.key}
            journey={journey}
            meals={meals}
          />
        ))}
      </div>
    );
  }
}

export default Meals;
