import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Productions from '../components/productions/Productions';
import ImageMapEditor from '../components/imagemap/ImageMapEditor';
import WorkflowEditor from '../components/workflow/WorkflowEditor';
import Title from './Title';
import HeadshotContainer from './template/HeadshotContainer';

class App extends Component {
    state = {
        current: 'productions',
    }

    onChangeMenu = ({ key }) => {
        this.setState({
            current: key,
        });
    }

    render() {
        const { current } = this.state;
        let currentPage = <div/>;
        if (current === 'imagemap') {
            currentPage = <ImageMapEditor />;
        } else if (current === 'workflow') {
            currentPage = <WorkflowEditor />;
        } else if (current === 'productions') {
            currentPage = <Productions />;
        }
        console.log('====== test: ', current);
        return (
            <HeadshotContainer>
                <div className="rde-main">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link rel="manifest" href="./manifest.json" />
                        <link rel="shortcut icon" href="./favicon.ico" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
                        <title>Headshot Printing</title>
                    </Helmet>
                    <div className="rde-title">
                        <Title onChangeMenu={this.onChangeMenu} current={current} />
                    </div>
                    <div className="rde-content">
                        { currentPage }
                    </div>
                </div>
            </HeadshotContainer>
        );
    }
}

export default App;
