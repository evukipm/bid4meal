import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './stylesheets/index.css';
import Index from './pages/Index';
import Loading from './pages/Loading';

class App extends Component {

  state ={
    user: 'Visitor',
    loading: true,
  }

  render() {
    let {loading} = this.state;
    return (
      <Router>
        {loading ? <Loading /> :<Route path="/" exact component={Index} />}
      </Router>
    );
  }
}

export default App;
