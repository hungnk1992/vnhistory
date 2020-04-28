import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Row, Col, Avatar, Typography  } from 'antd';

const { Title } = Typography;
class HeaderInformation extends Component {

  render (){
    const {userInfo} = this.props;
    return (<div>
        <Row type="flex" justify="center" align="top">
            <Col span={18}>
              <Title level={1}>{userInfo.name}</Title>
              <Title level={2}>{userInfo.position}</Title>
            </Col>
            <Col span={6}><Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Col>
        </Row>
    </div>)
  }
}

export default withTranslation()(HeaderInformation);
