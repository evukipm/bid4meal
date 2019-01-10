import React, { Component } from 'react'

export default class Loading extends Component {

  state = {
    rotation: true,
  }

  componentDidMount(){
    this.intervalid = setInterval(()=>{
      this.setState(prevState => ({
        rotation: !prevState.rotation}))
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalid);
  }

  render() {
    let {rotation} =this.state;
    let animation = rotation ? 'rotate' : '';
    return (
      <div className="loading">
      <div className="loading-content">
        <img className={animation} src="/images/breakfast.svg" alt="breakfast" />
        <p>Loading...</p>
      </div>
    </div>
    )
  }
}

