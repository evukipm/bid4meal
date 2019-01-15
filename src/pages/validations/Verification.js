import React, { Component } from 'react'
import queryString from 'query-string';

import Loading from './Loading';
import Meals from '../Meals';
import InexistentPassenger from './InexistentPassenger';

class Verification extends Component {

  state = {
    loading: true,
  }

  componentDidMount() {
    this.verifyPassenger();
  }

  verifyPassenger(){
      const {passengers} = this.props.flight;
      const parsed = queryString.parse(this.props.location.search);
      if(parsed && parsed.first && parsed.last){
        const firstname = parsed.first;
        const lastname = parsed.last;

        for (let i = 0; i < passengers.length; i++) {
          if (passengers[i].firstName === firstname && passengers[i].lastName === lastname) {
            return this.setState({
              exists: true,
              passenger: passengers[i],
              loading: false,
            })
          }
          else{
            this.setState({
              loading: false,
              exists: false,
            })
          }
        }
    }
    else{
      this.setState({
        loading: false,
        exists: false,
      })
    }
  }

  render() {
    const {passenger, exists, loading} = this.state;
    const {flight, meals} = this.props;
    return (
      <div>
        {loading ? <Loading /> : exists ? <Meals passenger={passenger} flight={flight} meals={meals} /> : <InexistentPassenger/>}
      </div>
    )
  }
}

export default Verification;
