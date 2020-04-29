import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {Row, Col, Input, Table, Card } from 'antd';
import reqwest from 'reqwest';
import './index.scss';

const { Search } = Input;
const { Meta } = Card;


const columns = [
  {
    title: 'Gender',
    dataIndex: 'gender',
    render: (gender) => {
      return <div>
        <h2>What is Lorem Ipsum?</h2>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card hoverable cover={<img alt="example" src="https://nosidebar.com/images/benefits-of-minimalism.jpg" />}>
              <Meta title="What is Lorem Ipsum" description="What is Lorem Ipsum" />
            </Card>
          </Col>
          <Col span={16}>
            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>This is some information</p>
            <p>Info</p>
          </Col>
        </Row>
      </div>
    },
    width: '80%',
  },
];

const getRandomuserParams = params => {
  return {
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
  };
};

class Home extends Component {
  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 5,
    },
    loading: false,
  };

  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  fetch = (params = {}) => {
    this.setState({ loading: true });
    let dt = getRandomuserParams(params);
    console.log (dt);
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      type: 'json',
      data: dt,
    }).then(data => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
        },
      });
    });
  };

  render (){
    const { data, pagination, loading } = this.state;
    return (
      <div className="home-content">
        <Row gutter={[24, 8]}>
          <Col span={2}>
            <div className="additional-info">
              <p>Hung Nguyen</p>
              <p>199x</p>
              <p>C/C++</p>
            </div>
          </Col>
          <Col span={16} className="home-content-main">
          <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={this.handleTableChange}
            showHeader={false}
          />
          </Col>
          <Col span={6}>
            <div className="home-right-sidebar">
              <Row gutter={[16, 8]}>
                <Col>
                  <Search placeholder="input search text" onSearch={value => console.log(value)}/>
                </Col>
              </Row>
              <Row gutter={[16, 8]}>
                <Col>
                <Row gutter={[16, 8]}>
                  <Col>
                  <Card hoverable cover={<img alt="example" src="https://booklistqueen.com/wp-content/uploads/minimalism-books-feature-horizontal.jpg" />}>
                    <Meta title="What is Lorem Ipsum" description="What is Lorem Ipsum" />
                  </Card>
                  </Col>
                </Row>
                <Row gutter={[16, 8]}>
                  <Col>
                    <Card hoverable cover={<img alt="example" src="https://balancethroughsimplicity.com/wp-content/uploads/2018/09/Research-into-the-psychological-effects-of-Minimalism-and-decluttering-865x606.jpg" />}>
                    <Meta title="What is Lorem Ipsum" description="What is Lorem Ipsum" />
                  </Card>
                  </Col>
                </Row>
                <Row gutter={[16, 8]}>
                  <Col>
                  <Card hoverable cover={<img alt="example" src="https://modernmrsdarcycom344a7.zapwp.com/q:intelligent/retina:false/webp:true/w:480/url:https://modernmrsdarcy.com/wp-content/uploads/2017/06/bookshelf-ampersand-horizontal.jpg" />}>
                    <Meta title="What is Lorem Ipsum" description="What is Lorem Ipsum" />
                  </Card>
                  </Col>
                </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTranslation()(Home);
