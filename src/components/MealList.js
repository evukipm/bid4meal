import React, { Component } from 'react';

import MealBox from './MealBox';

class MealList extends Component {

  state = {
    selectedid: '',
    saved: false,
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
    }else{
      this.setState({
        saved: false,
      })
    }
  }

  render() {
    const { meals } = this.props;
    const { selectedid, saved } = this.state;
    return (
      <div>
        {meals.map(meal => (
          <div key={meal.mealId} className={meal.mealId === selectedid ? 'selected' : 'no-selected'}>
              <MealBox                
                meal={meal}
                select={this.selectMeal}
              />
          </div>
        ))}
        <button onClick={this.saveSelection}>Save your selection</button>
        {saved ? null : <p>Please, select a meal before continue.</p>}
      </div>
    );
  }
}

export default MealList;
