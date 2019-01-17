import React, { Component } from 'react';

import MealBox from './MealBox';

class MealList extends Component {

  state = {
    selectedid: false,
  }

  selectMeal = (mealId) => {
    this.setState({
      selectedid: mealId,
    })
  }
  saveSelection = () => {
    const {selectedid} = this.state
    if(selectedid !== ''){
      this.props.mealSelected(selectedid)
    }
  }

  render() {
    const { meals } = this.props;
    const { selectedid } = this.state;
    return (
      <div>
        {meals.map(meal => (
          <div key={meal.mealId} className={meal.mealId === selectedid ? 'selected' : 'no-selected'}>
              <MealBox                
                meal={meal}
                select={this.selectMeal}
                save={this.saveSelection}
              />
          </div>
        ))}
        {selectedid ? null : <p>Please, select a meal before continue.</p>}
      </div>
    );
  }
}

export default MealList;
