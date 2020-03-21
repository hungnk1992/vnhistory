import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render (){
      const {t, str} = this.props;
    return (
      <h1>{t(str)}</h1>
    );
  }
}

export default withTranslation()(Home);
