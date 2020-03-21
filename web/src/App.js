import React, { Component } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import Home from './containers/Home';

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <Home str="test" />
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
