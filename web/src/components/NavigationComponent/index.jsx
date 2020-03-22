import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import About from '../../containers/About'
import Home from '../../containers/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavigationComponent extends Component {

  routes = [
    {
      name: 'Home',
      link: '/',
      component: <Home />,
    },
    {
      name: 'About',
      link: '/about',
      component: <About />,
    }
  ]

  render (){
    return (
      <Router>
        <div>
          <ul>{ this.routes.map((route) => {
              return <li key={route.name}><Link to={route.link}>{route.name}</Link></li>
            })}
          </ul>
          <hr />
          <Switch> { this.routes.map ((route) => {
            return <Route key={route.name} exact path={route.link}>{route.component}</Route>
          })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withTranslation()(NavigationComponent);
