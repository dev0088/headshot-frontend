import React, { Component } from 'react';
import { connect } from 'react-redux';


class HeadshotScreen extends Component {

  render = () => {
    const { Layout, member, auth, memberLogout } = this.props;

    return <Layout member={member} auth={auth} logout={memberLogout} />;
  }
}


export default HeadshotScreen;
