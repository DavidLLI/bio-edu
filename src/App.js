import React, { Component } from 'react';

import ScrollNav from './ScrollNav/ScrollNav';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'currentPage': 0
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({currentPage: newPage});
  }

  render() {
    return (
      <div className="App">
        <div className="scroll-nav">
          <ScrollNav
            onPageChange={this.handlePageChange} />
        </div>
        <div className="interface-page">
          {'Interface ' + (this.state.currentPage + 1)}
        </div>
      </div>
    );
  }
}

export default App;
