import React, { Component } from "react";
import { Menu } from 'antd'
import { withTranslation } from 'react-i18next';
import About from '../../containers/About'
import Home from '../../containers/Home'
import { SCREEN } from '../../utils/constants'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  HomeOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

class NavigationComponent extends Component {
  constructor (props){
    super(props);
    this.state = {
      selectedMenu: SCREEN.HOME,
    }
  }

  routes = [
    {
      name: SCREEN.HOME,
      link: '/',
      component: <Home />,
      icon: <HomeOutlined />,
    },
    {
      name: SCREEN.ABOUT,
      link: '/about',
      component: <About />,
      icon: <ProfileOutlined />,
    }
  ]

  onSelectedMenu = e => {
    this.setState({
      selectedMenu: e.key,
    });
  };
  
  render (){
    return (
      <Router>
        <div>
          <Menu onClick={this.onSelectedMenu} selectedKeys={[this.state?.selectedMenu]} mode="horizontal">
            { this.routes.map((route) => {
                return <Menu.Item key={route.name}>{route.icon}{<Link to={route.link}>{route.name}</Link>}</Menu.Item>
              })
            }
          </Menu>
          <div className="main-body">
            <Switch> { this.routes.map ((route) => {
              return <Route key={route.name} exact path={route.link}>{route.component}</Route>
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withTranslation()(NavigationComponent);
