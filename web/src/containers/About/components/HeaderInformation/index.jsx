import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col, Avatar } from 'antd';


class HeaderInformation extends Component {

  render (){
    return (<div>
        <Row type="flex" justify="center" align="top">
            <Col span={18}>col-12</Col>
            <Col span={6}><Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Col>
        </Row>
    </div>)
  }
}

export default withTranslation()(HeaderInformation);
