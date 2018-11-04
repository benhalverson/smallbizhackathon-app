import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { searchResults } from '../data/searchResults';
// import {Button} from '@material-ui/core/Button';
import AddCircle  from '@material-ui/icons/AddCircle';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "80%",
     
  },
  GridListTile :{
    padding:20,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
});

function SearchListComponent(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
   
      <GridList   cellHeight={180} spacing={15} className={classes.gridList} cols={2}>
        <GridListTile key="Subheader" cols={2} style={{  height: 'auto' }}>
         {/*<ListSubheader component="div">Results</ListSubheader> */} 
        </GridListTile>
        {searchResults.map(tile => (
          <GridListTile key={tile.id}>
            <img src={tile.img} alt={tile.companyName} style={{ width:"80", height: '100%' }} />
            <GridListTileBar
            title={tile.title}
            subtitle={<span><h4>Test</h4>by: {tile.author}</span>} 
              description={tile.description}
              actionIcon={
                
                <IconButton className={classes.icon}>
                <AddCircle />
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
