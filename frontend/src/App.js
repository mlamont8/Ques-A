import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Navbar/Navbar'
import Questions from './Questions/Questions'
import Question from './Question/Question'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Questions} />
        <Route exact path='/question/:questionId' component={Question} />
      </div>
    );
  }
}

export default App;