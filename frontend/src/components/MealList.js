import React, { Component } from 'react';

import MealBox from './MealBox';

class MealList extends Component {

  state = {
    selectedid: '',
  }

  selectMeal = (mealId) => {
    const {selected} = this.state
    this.setState({
      selectedid: mealId,
    })
  }

  render() {
    const { meals } = this.props;
    const { selectedid } = this.state;
    return (
      <div>
        {meals.map(meal => (
            <MealBox
              className={meal.mealId === selectedid ? 'selected' : 'no-selected'}
              key={meal.mealId}
              meal={meal}
              select={this.selectMeal}
            />
        ))}
      </div>
    );
  }
}

export default MealList;
