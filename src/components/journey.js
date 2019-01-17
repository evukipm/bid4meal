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
    const mealContainer = <div>
    <div className="meal">
      <div><i className="fas fa-utensils"></i></div>
      <div>{selection.desc}</div>
    </div>
    <button onClick={this.openMealOptions}>Change selection</button>
    </div>

    return (
      <div className="flight-box">
        <div className="flight">
          <div><i className="fas fa-plane"></i></div>
          <div>{key}</div>
        </div>
        {selection ? mealContainer : <button onClick={this.openMealOptions}>{opened ? 'Close' : 'Open'} the meal list</button>}
        {opened ? <MealList meals={meals} mealSelected={this.mealSelected} /> : null}
      </div>
    );
  }
}
