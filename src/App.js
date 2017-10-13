import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div ref={div => this.app = div} className="App">
        <header className="App-header">
          <h1>PDF Test</h1>
          <button onClick={() => window.saveAsPdf(this.app, 'react-app')}>
            Save this page as a PDF!
          </button>
        </header>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
