import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ImageLoader from 'react-loading-image';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { materialStyles } from '../../styles/material/index';


class HeadshotHeader extends Component {
  static defaultProps = {
    member: {},
    auth: {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      open: false,
      search: ''
    };
  }

  componentDidMount() {
    
  }

  hanldeClickLogout = () => {
    // this.props.logout(this.props.auth.access.token);
    // this.props.history.push('/login')
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClickLogin = () => {
    // this.props.history.push('/login')
  };

  handleClickSignUp = () => {
    // this.props.history.push('/sign-up')
  };

  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  getUserAvatarFromProps() {
    // const { clientInfo } = this.props

    return null
  }

  // renderTopbarMenuItem(title, link) {
  //   const { classes } = this.props;
  //   return (
  //     <Link to={link} style={{display: 'inline-block'}}>
  //       <Typography
  //         className={classNames(classes.menuItemText, classes.topbarMenuItemTitle, classes.topbarDynamicShow)}
  //       >
  //         {title}
  //       </Typography>
  //     </Link>
  //   )
  // }

  // renderDrawerListItem(title, link) {
  //   return (
  //     <Link to={link} onClick={this.handleDrawerClose}>
  //       <ListItem button>
  //         <ListItemText primary={title} />
  //       </ListItem>
  //     </Link>
  //   );
  // }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  
  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  };
  
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSearch();
    }
  };

  handleSearch = () => {
    // let data = {
    //   talent_name_or_tid: this.state.search
    // };
    // this.props.clientActions.talentSearch(data);
    // this.props.history.push('/client/talent_search_result');
  };

  render() {
    const { auth, children, classes } = this.props;
    console.log('==== props: ', this.props);
    const { anchorEl, mobileMoreAnchorEl, open } = this.state;
    const openAnchor = Boolean(anchorEl);
    const loggedIn = (auth && auth.access && auth.access.email);
    let username = "";
    let userAvatar = null;

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = 
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClickLogin}>{"Login"}</MenuItem>
        <MenuItem onClick={this.handleClickSignUp}>{"Sign Up"}</MenuItem>
      </Menu>

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem onClick={this.handleClickLogin}>
          <Button color="inherit" onClick={this.handleClick}>
            <AccountCircle />
          </Button>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Hidden only={['xl', 'lg']}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.drawerMenuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden only={['md', 'sm', 'xs']}>
              <Typography
                className={classNames(classes.brandTitle, classes.topbarDynamicShow)}
              >
                {'Headshot'}
              </Typography>
                <img className={classes.brandImage}
                  alt="Logo"
                  src={require('../../images/logo.jpg')} 
                />
              <div className={classNames(classes.grow, classes.topbarDynamicShow)}>
                {/* {this.renderTopbarMenuItem('Home', '/client/home')}
                {this.renderTopbarMenuItem('Find Talent', '/client/talent_search')}
                {this.renderTopbarMenuItem('Casting Requests', '/client/request_selection')}
                {this.renderTopbarMenuItem('Saved Talent', '/client/mytalent/saved')}
                {this.renderTopbarMenuItem('Shared Profiles', '/client/myshared_profile')}
                {this.renderTopbarMenuItem('Blocked Profiles', '/client/blocked_profile')}
                {this.renderTopbarMenuItem('Ratings', '/client/my_rate')} */}
              </div>
            </Hidden>

            <div className={classes.grow}/>
             <div>
                <Button color="inherit" onClick={this.handleClick}>
                  <IconButton
                    aria-owns={openAnchor ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    color="inherit">
                      <AccountCircle />
                  </IconButton>
                </Button>
              </div>
  
          </Toolbar>
        </AppBar>
        {renderMenu}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <img className={classes.drawerBandImage}
              alt="Logo"
              src={require('../../images/logo.jpg')} 
            />
            {/* <IconButton onClick={this.handleDrawerClose}>
              {<ChevronLeftIcon />}
            </IconButton> */}
          </div>
          <Divider />
          <List>
            {/* {this.renderDrawerListItem('Home', '/client/home')}
            {this.renderDrawerListItem('Find Talent', '/client/talent_search')}
            {this.renderDrawerListItem('Casting Requests', '/client/request_selection')}
            {this.renderDrawerListItem('Saved Talent', '/client/mytalent/saved')}
            {this.renderDrawerListItem('Shared Profiles', '/client/myshared_profile')}
            {this.renderDrawerListItem('Blocked Profiles', '/client/blocked_profile')}
            {this.renderDrawerListItem('Ratings', '/client/my_rate')} */}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    )
  }
}

// export default withStyles(materialStyles, { withTheme: true })(HeadshotHeader);

export default compose(withStyles(materialStyles, { withTheme: true }),
  withWidth(),)(HeadshotHeader);