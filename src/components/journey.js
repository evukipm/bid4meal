import React, { Component } from 'react';

import MealList from './MealList';

export default class Journey extends Component {

  state = {
    opened: false,
    selection: false,
  }

  openMealOptions = () => {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    })
  }

  mealSelected = (mealid) => {
    const { meals } = this.props;
    meals.forEach(meal => {
      if(meal.mealId === mealid){
        this.props.saveMeal(this.props.journey.key, meal)
        this.setState({
          opened: false,
          selection: meal,
        }) 
      }
    });
  }

  render() {
    const { key } = this.props.journey;
    const { meals } = this.props;
    const { opened, selection } = this.state;

    return (
      <div>
        <p>
          <strong>Flight:</strong>
          {` ${key}`}
        </p>
        <strong>Meal selected: </strong> {selection ? selection.desc : <button onClick={this.openMealOptions}>See the meals</button>}
        
        {opened ? <MealList meals={meals} mealSelected={this.mealSelected} /> : null}
      </div>
    );
  }
}
