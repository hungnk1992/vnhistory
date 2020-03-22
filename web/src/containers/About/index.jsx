import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';


class About extends Component {
  render (){
      const {t} = this.props;
    return (
      <h1>{t("screen.about")}</h1>
    );
  }
}

export default withTranslation()(About);
