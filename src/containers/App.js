import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Productions from '../components/productions/Productions';
import Production from '../components/production/Production';
import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import WorkflowEditor from '../components/workflow/WorkflowEditor';
import Title from './Title';
import HeadshotContainer from './template/HeadshotContainer';

class App extends Component {
  state = {
    current: 'productions',
    selectedProductionId: 1
  }

  onChangeMenu = ({ key, productionId }) => {
    console.log('==== productionId: ', key, productionId);
    this.setState({
      current: key,
      selectedProductionId: productionId
    });
  }

  render() {
    const { current, selectedProductionId } = this.state;
    let currentPage = <div/>;
    if (current === 'imagemap') {
      currentPage = <ImageMapEditor key='imageMapEditor' />;
    } else if (current === 'workflow') {
      currentPage = <WorkflowEditor key={'workflowEdit'} />;
    } else if (current === 'productions') {
      currentPage = <Productions onChangeMenu={this.onChangeMenu} key="productions" />;
    } else if (current === 'production') {
      currentPage = <Production productionId={selectedProductionId} onChangeMenu={this.onChangeMenu} key="production" />;
    }

    return (
      (current === 'imagemap') ? (
        <div className="rde-main">
          {/* <Helmet>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="manifest" href="./manifest.json" />
            <link rel="shortcut icon" href="./favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
            <title>React Design Editor</title>
          </Helmet> */}
          <div className="rde-content">
            { currentPage }
          </div>
        </div>
      ) : (
        <HeadshotContainer>
            { currentPage }
        </HeadshotContainer>        
      )
    );
  }
}

export default App;
