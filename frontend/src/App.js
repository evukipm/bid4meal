import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './stylesheets/index.css';

import Index from './pages/Index';
import Loading from './pages/Loading';
import Meals from './pages/Meals';

import booking from './lib/booking-service';

class App extends Component {

  state ={
    user: 'Visitor',
    loading: true,
    booking: {},
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    booking.getBooking()
    .then(result => {
      this.setState({
        booking: result.booking,
        loading: false,
      })
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  render() {
    let {loading, booking} = this.state;
    return (
      <Router>
        <Switch>
          {loading ? <Loading /> :<Route path="/" exact component={Index} />}
          {loading ? <Loading /> :<Route path={`/${booking.recordLocator}/:name`} component={Meals} />}
        </Switch>
      </Router>
    );
  }
}

export default App;
