import React, { Component } from "react";
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

import { Layout, Menu } from 'antd';
import './index.scss';

const { Content, Footer } = Layout;

class NavigationComponent extends Component {
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
    let selectedMenu = "";
    this.routes.forEach((route)=>{
      if (route.link === window.location.pathname){
        selectedMenu = route.name;
      }
    });

    return (
      <Layout style={{backgroundColor: '#ffffff'}}>
        <Router>
          <div className="container-header">
            <div className="main-header">
              <p className="primary">Minimalist Lifestyle</p>
              <p className="secondary">Minimalist Lifestyle Minimalist Lifestyle</p>
            </div>
          </div>
          <Menu mode="horizontal" onClick={this.onSelectedMenu} selectedKeys={selectedMenu}>
            { this.routes.map((route) => {
                return <Menu.Item key={route.name}>{route.icon}{<Link to={route.link}>{route.name}</Link>}</Menu.Item>
              })
            }
          </Menu>
          <Content>
            <Switch> { this.routes.map ((route) => {
              return <Route key={route.name} exact path={route.link}>{route.component}</Route>
              })}
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            nguyenhung.tlh@gmail.com
          </Footer>
        </Router>
      </Layout>
      
    );
  }
}

export default withTranslation()(NavigationComponent);
