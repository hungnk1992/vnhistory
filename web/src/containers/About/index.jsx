import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import HeaderInformation from './components/HeaderInformation'


class About extends Component {
  renderHeaderInformation (){
    return <HeaderInformation />
  }

  renderCommonInformation (){
    return <h2>This is about you</h2>
  }

  renderEducation (){
    return <h2>This is education</h2>
  }

  renderExperiences (){
    return <h2>Exp</h2>
  }

  renderSkills (){
    return <h2>skills</h2>
  }

  renderInterest (){
    return <h2>interest</h2>
  }

  renderOthers (){
    return <h2>others</h2>
  }

  render (){
    return (
      <div>
        <div>{this.renderHeaderInformation()}</div>
        <div>{this.renderCommonInformation()}</div>
        <div>{this.renderEducation()}</div>
        <div>{this.renderExperiences()}</div>
        <div>{this.renderInterest()}</div>
        <div>{this.renderOthers()}</div>
      </div>
    );
  }
}

export default withTranslation()(About);
