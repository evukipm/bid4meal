import React, { Component } from 'react';
import Info from '../components/Info';
import Journey from '../components/journey';
//import booking from '../lib/booking-service'


class Meals extends Component {

  state = {
    selection: [
      {
        journeyKey: this.props.flight.journeys[0].key,
        amount: false,
        currency: false,
        mealId: false,
      },
      {
        journeyKey: this.props.flight.journeys[1].key,
        amount: false,
        currency: false,
        mealId: false,
      }
    ],
    selected: false,
  }

  saveMeal = (journey, meal) => {
    const {selection} = this.state;
    for(let i = 0;i < selection.length; i++){
      if(journey === selection[i].journeyKey){
        let selectionCopy = JSON.parse(JSON.stringify(this.state.selection))
        selectionCopy[i].amount = meal.price;
        selectionCopy[i].currency = meal.currency;
        selectionCopy[i].mealId = meal.mealId;
          this.setState({
            selection:selectionCopy
          })
      }
    }
  }

  isSelected = () =>{
    const {selection} = this.state;
    if(selection[0].mealId && selection[1].mealId){
      return <button className="send-button" onClick={this.sendSelection}>Send selection</button>
    }else{
      return <p>Please select the two meals before continue</p>
    }
  }

  sendSelection = () => {
    let selection = this.state
    if(selection.selection[0].mealId && selection.selection[1].mealId){
      //booking.sendMeals(JSON.stringify(selection))
          console.log('finished');
          console.log(JSON.stringify(selection));
      }
  }

  render() {
    const { passenger, flight, meals } = this.props;
    const selected  = this.isSelected();
    const journeys = flight.journeys;

    return (
      <div className="meals-content">
        <h3>Welcome to bid4meal</h3>
        <div className="meals-info">
          <Info passenger={passenger} />
          {journeys.map(journey => (
          <Journey
            key={journey.key}
            journey={journey}
            meals={meals}
            saveMeal={this.saveMeal}
          />
          ))}
        </div>
        <div className="send-box">
          {selected}
        </div>
      </div>
    );
  }
}

export default Meals;
