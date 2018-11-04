import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import Payment from '@material-ui/icons/Payment';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import AddCircle from '@material-ui/icons/AddCircle';


const styles = {
  
  card: {
    Width: 1000,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <h3>Status:</h3>
     <Grid container direction="column"
  justify="center"
  alignItems="center"
  className={classes.root} spacing={16} cols="1">
        <Grid item key='1'  >
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            Sponsor Requests
          </Typography>
          <Typography component="p">
           New sponsor requests from small business promoters : like events, NPO and other SMBs
          </Typography>

           {[1,2,3].map(value => (
        <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src={"http://lorempixel.com/200/200/people/"+ value}    />
              <ListItemText primary={<span>`Line item ${value + 1}` <p>halo</p>  <h3>test</h3> </span>} />
                
              <ListItemSecondaryAction>
           {/* if(value  == 2){  */}
                 <ListItemIcon   style={{color: '#0066ff',   }} aria-label="Comments">
                  <AddCircle />
                </ListItemIcon>  
                {/* }
                else{               */}
                <ListItemIcon   style={{color: '#ff3d00',}} aria-label="Comments">
                  <RemoveCircle />
                </ListItemIcon>
                {/* } */}
              </ListItemSecondaryAction>
            </ListItem>
          ) )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>   
     </Grid>

       <Grid item key='2'  >
       <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            Applied to Promoters:
          </Typography>
          <Typography component="p">
            Status of your applications to Promoters of your interest.
          </Typography>

           {[1,2,3].map(value => (
        <ListItem key={value} dense button>
              <Avatar alt="Remy Sharp" src={"http://lorempixel.com/200/200/people/"+ value}    />
              <ListItemText primary={<span>`Line item ${value + 1}` <p>halo</p>  <h3>test</h3> </span>} />
                
              <ListItemSecondaryAction>
                
                 <ListItemIcon   style={{color: '#0066ff',   }} aria-label="Comments">
                  <Payment />
                </ListItemIcon>                
                <ListItemIcon   style={{color: '#ff3d00',}} aria-label="Comments">
                  <RemoveCircle />
                </ListItemIcon>

              </ListItemSecondaryAction>
            </ListItem>
          ) )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card> 
     </Grid>

       
            </Grid>
            </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
