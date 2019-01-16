import React, { Component } from 'react';
import Navbar from './Navbar/Navbar'
import Questions from './Questions/Questions'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Questions />
      </div>
    );
  }
}

export default App;