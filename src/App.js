import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './stylesheets/index.css';

import Loading from './pages/validations/Loading';
import Verification from './pages/validations/Verification';
import Page404 from './pages/validations/Page404';

import booking from './lib/booking-service';

class App extends Component {

  state ={
    loading: true,
    booking: {},
    meals: [],
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    booking.getBooking()
    .then(result => {
      const meals = result.options;
      
      meals.forEach(meal => {
        const {max, min, jump} = meal.priceRange;
        meal.price = this.getRandomprice(max, min, jump);
      });

      this.setState({
        booking: result.booking,
        meals,
        loading: false,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  getRandomprice = (max, min, jump) =>{
    return Math.floor(Math.random() * (max - min) + jump);
  }

  render() {
    let {loading, booking, meals} = this.state;
    return (
      <Router>
        <Switch>
          {loading ? <Loading /> :<Route path={`/${booking.recordLocator}/meals`} component={
            props => <Verification {...props} flight={booking} meals={meals}/>} 
          />}
          {loading ? <Loading /> : <Route component={Page404} />} 
          />}
        </Switch>
      </Router>
    );
  }
}

export default App;
