import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
 

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { browserHistory , BrowserRouter as Router,  Route, Link } from "react-router-dom";
import Homecards from './homecards';
import   About   from './about';
import   Sponsors   from './Sponsors';
import   Search   from './SearchComponent';
import   Requests   from './Requests';
import   Accounting   from './AccountComponent';
import   History   from './historyComponent';
// import   Requests   from './Requests';
// import { createMuiTheme } from '@material-ui/core/styles';

// import { withRouter } from 'react-router';

 

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    decorations: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
      list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class MainAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left: false, 
    redirect:false,
    // open: false, 
  };

 toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
      // open: open,
    });
  };

  

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

 handleDrawerClose = () => {
    this.setState({ open: false });
  };
 

  handleSearchClick = () =>  {
    console.log("searchclick");
    // this.setState({redirect: true});
    // this.props.history.push("/home");
    // this.props.router.push('/');
    // this.context.router.push('/search');
    // browserHistory.push('/');
  }

  


  render() { 
    
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    const title = 'SMBLE PROMO $5 ';
     
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton onClick={this.handleDrawerClose} color="inherit">
            <Badge className={classes.margin} badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton color="inherit">
            <Badge className={classes.margin} badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>News</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      </Menu>
    );

  


    return (
      <Router>
      <div className={classes.root}>
        <AppBar position="static">
        
         <Drawer open={this.state.left}  onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
           <AppBar position="static">   
           <Toolbar>
            <Typography   color="inherit">
            { title}
          </Typography>  
        </Toolbar>
            </AppBar>
            {sideList}
          </div>
        </Drawer>

          <Toolbar>
            <IconButton  onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}   color="inherit" noWrap>
            <Link className={classes.title} to="/" style={{ textDecoration: 'none', color:'white', fontSize: "2em" }} >  { title} </Link>
            </Typography>
            <div><Link to= "/search" style={{ textDecoration: 'none', color: "red" }} >   search</Link></div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
               <SearchIcon />  
              </div>
              <Input
               onClick={this.handleSearchClick}
                placeholder="Search…"
                disableUnderline
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }} 
                 
              />
            </div>
           
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge className={classes.margin} badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      <MainCard> 
       <Route exact={true} path="/" component={Homecards} />
         <Route exact={true} path="/home" component={Homecards} />
      <Route exact={true} path="/about" component={About} />
       <Route exact={true} path="/sponsors" component={Sponsors} /> 
       <Route exact={true} path="/accounting" component={Accounting} />  
       <Route exact={true} path="/history" component={History} />
       {/* <Route exact={true} path="/sponsors" component={Sponsors} /> */}
       <Route exact={true} path="/requests" component={Requests} />
       <Route exact={true} path="/search" component={Search} />
         </MainCard> 
      </div>
      </Router>
    );
  }
}


const MainCard = (props) => (
  // render={()=>(<h1>About Page</h1>)}
  <div style ={{flex:1,
  height: '100wh',
  overflow: 'any'}}>
<div  style ={{ paddiing: '20px'}} {...props}  />
  </div>
)

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (MainAppBar);

  