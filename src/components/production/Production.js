import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { Popconfirm, message, Button } from 'antd';
// import storage from 'store/storages/localStorage';
import classNames from 'classnames';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import ImageLoader from 'react-loading-image';
import HeadshotAPI from '../../apis/headshotAPIs';
import Spacer from '../common/material/spacer';
import ProductionSteper from './ProductionSteper';
import SelectQuantity from './SelectQuantity';
import CloudinaryUploader from './CloudinaryUploader';
import ProductionUpload from './ProductionUpload';
import * as appUtils from '../../utils/appUtils';
import { materialStyles } from '../../styles/material/index';



class Production extends Component {
  state = {
    loading: false,
    production: null,
    quantityId: null,
    order: null,
    step: 0,
    hasImage: false,
    uploadImageUrl: null,
    fileName: '',
  };

  componentWillMount() {
    this.setState({
      loading: true,
      step: 0,
    }, () => {
      HeadshotAPI.getProduction(this.props.productionId, this.handleGetProductionResponse);
    });
  }

  handleGetProductionResponse = (response, isFailed) => {
    this.setState({production: response, loading: false});
  };

  handleClickGallery = (productionId) => {
    this.props.onChangeMenu({key: 'imagemap', productionId});
  };

  handleChangeOrder = order => {
    this.setState({ order });
  };

  handleChangeQuantity = quantityId => {
    this.setState({ quantityId });
  };

  handleChangeStep = (step) => {
    this.setState({step});
  }

  handleChange = (name, value) => {
    console.log(name, value);
    this.setState({[name]: value});
  }

  handleNext = () => {
    this.setState(state => ({
      step: state.step + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      step: state.step - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      step: 0,
    });
  };

  renderStepForm = () => {
    const { production, step, order, quantityId, hasImage } = this.state;
    switch (step) {
      case 0:
        return <SelectQuantity
                production={production}
                quantityId={quantityId}
                onChangeQuantity={this.handleChangeQuantity}
                order={order}
                onChangeOrder={this.handleChangeOrder}
              />;
      case 1:
        return <ProductionUpload hasImage={hasImage} onChange={this.handleChange} />;
      case 2:
        return this.props.onChangeMenu({key: 'imagemap', productionId: production.id});
      default:
        return 'Unknown stepIndex';
    }
  }

  render = () => {
    const { classes } = this.props;
    const { loading, production, step, quantityId } = this.state;

    let productionQuantities = [];

    if (!(production && production.production_quantities)) {
      return (
        <Paper className={classes.containerPaper} center>
          <CircularProgress size={40} thickness={5} />
        </Paper>
      );
    }

    return (
      <Paper className={classes.containerPaper}>
        <Grid container spacing={24}>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <ImageLoader
              className={classes.productionGalleryImage}
              src={appUtils.generateImageUrl(production.overview_image)}
              loading={() => <CircularProgress size={20} thickness={5} />}
              error={() => <img src={require("../../images/missing.png")} />} 
            />
          </Grid>

          <Grid item lg={8} md={6} sm={12} xs={12}>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <Typography className={classNames(classes.pageTitleText, classes.bold)}>
                {production.title}
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.rightText}>
                <Button
                  variant="outlined"
                  color="primary"
                  size="samll"
                  disabled={step === 0}
                  className={classes.nextButton}
                  onClick={this.handleBack}
                >
                  { 'Back' }
                </Button>
                <Button
                 variant="contained"
                  color="primary"
                  size="samll"
                  className={classes.nextButton}
                  onClick={this.handleNext}
                >
                  { (step === appUtils.getSteps().length - 1) ? 'Finish' : 'Next' }
                </Button>
              </Grid>
              <Grid item xs={12}>
                <ProductionSteper step={step} onChangeStep={this.handleChangeStep} />
              </Grid>
              <Grid item xs={12}>
                { this.renderStepForm() }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(materialStyles)(Production);
