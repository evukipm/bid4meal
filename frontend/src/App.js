import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Index from './pages/Index'

class App extends Component {

  state ={
    user: 'Visitor',
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Index} />
      </Router>
    );
  }
}

export default App;
