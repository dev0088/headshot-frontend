import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeadshotScreen from './HeadshotScreen';
import HeadshotHeader from './HeadshotHeader';
import { MuiThemeProvider, } from '@material-ui/core/styles';
import { themeMaterial } from '../../styles/material/index';

class HeadshotContainer extends Component {
  render () {
    const { children } = this.props;
    console.log('==== HeadshotContainer: ', this.props);
    return (
      <MuiThemeProvider theme={themeMaterial}>
        <HeadshotScreen Layout={HeadshotHeader} children={children}>
          {children}
        </HeadshotScreen>
      </MuiThemeProvider>
    );
  }
}

// const HeadshotContainer = ({ children }) => (
//   <MuiThemeProvider theme={themeMaterial}>
//     <HeadshotScreen Layout={HeadshotHeader} children={children}>
//     </HeadshotScreen>
//   </MuiThemeProvider>
// );

HeadshotContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default HeadshotContainer;
