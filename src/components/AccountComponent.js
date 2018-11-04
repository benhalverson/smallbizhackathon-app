import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

import AddCircle from '@material-ui/icons/AddCircle';
import RemoveCircle from '@material-ui/icons/RemoveCircle';


import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

// const Sponsors = (props) => (
//    <h1>Sponsors Page com</h1>
// )


 
const styles = {
  card: {
    maxWidth: "90%",
    marigin: "50px",
    height: "80%",
  },
  media: {
    height: 140,
  },
};


class Accounting extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    left: false, 
    // open: false, 
  }


    render(){
      const { classes, theme } = this.props;
let value=1;
      return(

        <div>
        <h1>Accounts</h1>
         <Card className={classes.card} >
         {[1,2,3].map(value => (
        <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src={"http://lorempixel.com/200/200/people/"+ value}    />
              <ListItemText primary={<span>`Line item ${value + 1}` <p>halo</p>  <h3>test</h3> </span>} />
               
              <ListItemSecondaryAction>
                {/* <Checkbox 
                  // onChange={this.handleToggle(value)}
                  // checked={this.state.checked.indexOf(value) !== -1}
                //> 
                */}
                 <IconButton fontSize="large" style={{color: '#0066ff',   }} aria-label="Accept">
                  <AddCircle />
                </IconButton>
                <IconButton fontSize="large" style={{color: '#ff3d00', }} aria-label="Deny">
                  <RemoveCircle/>
                </IconButton>

              </ListItemSecondaryAction>
            </ListItem>
          ) )}
             </Card  >
              </div>

      );
    }
  };
  
Accounting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Accounting);