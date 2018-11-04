import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { searchResults } from '../data/searchResults';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
});

function SearchListComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Results</ListSubheader>
        </GridListTile>
        {searchResults.map(tile => (
          <GridListTile key={tile.companyName}>
            <img src={tile.img} alt={tile.companyName} />
            <GridListTileBar
              description={tile.description}
              actionIcon={
                <IconButton className={classes.icon}>
                  <p>Request</p>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

SearchListComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchListComponent);
