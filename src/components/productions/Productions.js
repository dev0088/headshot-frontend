import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor } from 'css-element-queries';
import i18n from 'i18next';
import { Popconfirm, message, Button } from 'antd';
import storage from 'store/storages/localStorage';

import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Container from '../common/Container';
import HeadshotAPI from '../../apis/headshotAPIs'
import { materialStyles } from '../../styles/material/index';


class Productions extends Component {
    state = {
        loading: false,
        productions: []
    };

    componentWillMount() {
        console.log('=== rendering Productions');
        HeadshotAPI.getProductions(this.handleGetProductionsResponse);
        this.setState({loading: true}, () => {
            HeadshotAPI.getProductions(this.handleGetProductionsResponse);
        });
    }

    handleGetProductionsResponse = (response, isFailed) => {
        console.log('=== response: ', response);
        this.setState({productions: response, loading: false});
    };

    renderContent = () => {
        const { classes } = this.props;
        const { loading, productions } = this.state;
        let productionImages = productions.map(production => {
            return (
                <Grid item lg={4} md={3} sm={2} xs={12}>

                </Grid>
            );
        })

        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Typography className={classNames(classes.adminGeneralDescriptionText, classes.bold, classes.inlineText)}>
                        {`Reproductions is the leading headshot retouching and printing company, serving actors and other performing artists nationwide. 
                        With offices in NY and LA, Reproductions has set the standard for high quality photographic printing 
                        and superior level of customer service since 1991. From choosing a photographer to processing a print order, 
                        Reproductions ensures the client experience is seamless. For more information, visit www.reproductions.com.`}
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>  
        );
    };

    render() {
        const {
            loading,
            productions
        } = this.state;
        
        const title = (<div/>);
        
        const content = (
            <div>
            </div>
        );
        // <Grid container spacing={24}>
            //     <Grid item xl={2} lg={2} md={1} sm={1} xs={12} />
            //     <Grid item xl={8} lg={8} md={10} sm={10} xs={12} >
            //         {this.renderContent()}
            //     </Grid>
            //     <Grid item xl={2} lg={2} md={1} sm={1} xs={12} />
            // </Grid>
        return (
            <Container
                content={content}
                loading={loading}
                className=""
            />
        );
    }
}

export default withStyles(materialStyles)(Productions);
