import React, { Component } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import NavigationComponent from './components/NavigationComponent';

class App extends Component {

  render (){
    return (
      <div className="App">
        <header className="App-header">
          <NavigationComponent />
        </header>
      </div>
    );
  }
}

export default withTranslation()(App);
