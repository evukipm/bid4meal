import React, { Component } from 'react';

import MealList from './MealList';

export default class Journey extends Component {

  state = {
    opened: false,
  }

  openMealOptions = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    })
  }

  render() {
    const { key } = this.props.journey;
    const {meals} = this.props;
    const {opened} = this.state;

    return (
      <div>
        <p>
          <strong>Flight:</strong>
          {` ${key}`}
        </p>
        <button onClick={this.openMealOptions}>Select a Meal</button>
        {opened ? <MealList meals={meals} /> : null}
      </div>
    );
  }
}
