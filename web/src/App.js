import React, { Component } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';
import NavigationComponent from './components/NavigationComponent';
import 'antd/dist/antd.css';

class App extends Component {

  render (){
    return (
      <div className="App">
          <NavigationComponent />
      </div>
    );
  }
}

export default withTranslation()(App);
