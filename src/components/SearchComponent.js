import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
// import ReactDOM from 'react-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Menu from '@material-ui/core/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import SearchListComponent from './SearchListComponent';
const styles = theme => ({
  root: {
    width: '100%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  }
});
class SearchComponent extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left: false
    // open: false,
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder="Search…"
          disableUnderline
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
        <div>
          <SearchListComponent />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(SearchComponent);
