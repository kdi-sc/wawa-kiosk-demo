import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
                <a class="logo" href="/" title="Wawa Logo">&nbsp;</a>
            </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
