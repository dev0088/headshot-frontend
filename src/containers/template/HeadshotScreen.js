import React, { Component } from 'react';
import { connect } from 'react-redux';


class HeadshotScreen extends Component {

  render = () => {
    const { Layout, member, auth, memberLogout, children } = this.props;
    console.log('===== HeachshotScreen: ', this.props)
    return <Layout member={member} auth={auth} logout={memberLogout} children={children} />;
  }
}


export default HeadshotScreen;
