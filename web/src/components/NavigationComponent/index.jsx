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

import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css';

const { Header, Content, Footer } = Layout;

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
      <Layout className="layout">
        <Router>
          <Header>
              <Menu theme="dark" mode="horizontal" onClick={this.onSelectedMenu} selectedKeys={[this.state?.selectedMenu]} style={{ lineHeight: '64px' }}>
                { this.routes.map((route) => {
                    return <Menu.Item key={route.name}>{route.icon}{<Link to={route.link}>{route.name}</Link>}</Menu.Item>
                  })
                }
              </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item> */}
            </Breadcrumb>
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
