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
import { searchResults } from './searchResults';

// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// const styles = {
//   card: {
//     Width: 1000
//   },
//   media: {
//     height: 140
//   }
// };

// function toggle(props) {
//   if (this.props.hide === 2) {
//     const hidden = document.getElementById('hide');
//     hidden.style.display = 'none';
//   } else {
//     const hidden = document.getElementById('hide');
//     hidden.style.display = 'block';
//   }
// }

const styles = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  active: {
    backgroundColor: theme.palette.action.selected
  },
  ul: {
    'list-style-type': 'none'
  }
});

class MediaCard extends React.Component {
  state = {
    searchResults,
    open: false,
    openPay: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, openPay: false });
  };

  handleAcceptPay = () => {
    console.log('acceptPay Clicked');
    // this.setState ({searchResults: searchResults.shift()});
    this.setState({ openPay: true });
  };

  handleAcceptRequest = () => {
    console.log('addCirlce Clicked');
    this.setState({ searchResults: searchResults.shift() });
    this.setState({ open: true });
  };

  // function MediaCard(props) {
  render() {
    const { classes } = this.props;
    const value = 1;
    return (
      <div>
        <h3>Updates</h3>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Sponsor Request Accepted'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your Payment is on the Way to your Promoter!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button> */}
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={this.state.openPay}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'  Payment For  Accepted Promo'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your Payment is on the Way to your Promoter!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/* <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button> */}
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.root}
          spacing={16}
          cols="1"
        >
          <Grid item key="1">
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
                    New sponsor requests from small business promoters : like
                    events, NPO and other SMBs
                  </Typography>

                  {searchResults.map(value => (
                    <ListItem
                      key={value.id}
                      dense
                      button
                      style={{ listStyleType: 'none' }}
                    >
                      <Avatar alt="Remy Sharp" src={value.img} />
                      <ListItemText
                        style={{ listStyleType: 'none' }}
                        primary={
                          <span>
                            {value.companyName} <p> {value.description} </p>{' '}
                            <h3> {value.category} </h3>{' '}
                          </span>
                        }
                      />

                      <ListItemSecondaryAction>
                        {/* if(value  == 2){  */}
                        <ListItemIcon
                          style={{ color: '#0066ff' }}
                          aria-label="Comments"
                        >
                          <AddCircle onClick={this.handleAcceptRequest} />
                        </ListItemIcon>
                        {/* }
                else{               */}
                        <ListItemIcon
                          style={{ color: '#ff3d00' }}
                          aria-label="Comments"
                        >
                          <RemoveCircle />
                        </ListItemIcon>
                        {/* } */}
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
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

          <Grid item key="2">
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
                    Make your payment if accepted.
                  </Typography>

                  {/* {[1,2,3].map(value => ( */}
                  <ListItem
                    key={value}
                    dense
                    button
                    style={{ listStyleType: 'none' }}
                  >
                    <Avatar alt="Remy Sharp" src={'./images/img2.jpg'} />
                    <ListItemText
                      primary={
                        <span>
                          `Line item ${value + 1}` <p>halo</p> <h3>test</h3>{' '}
                        </span>
                      }
                    />

                    <ListItemSecondaryAction>
                      {/*                 
                 <ListItemIcon   style={{color: '#0066ff',   }} aria-label="Comments">
                  <Payment />
                </ListItemIcon>                 */}
                      <ListItemIcon
                        style={{ color: '#ff3d00' }}
                        aria-label="Comments"
                      >
                        <RemoveCircle />
                      </ListItemIcon>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem key={value + 1} dense button>
                    <Avatar alt="Remy Sharp" src={'./images/imgsmb.jpg'} />
                    <ListItemText
                      primary={
                        <span>
                          `Line item ${value + 1}` <p>halo</p> <h3>test</h3>{' '}
                        </span>
                      }
                    />

                    <ListItemSecondaryAction>
                      <ListItemIcon
                        style={{ color: '#0066ff' }}
                        aria-label="Comments"
                      >
                        <Payment onClick={this.handleAcceptPay} />
                      </ListItemIcon>
                      {/* <ListItemIcon   style={{color: '#ff3d00',}} aria-label="Comments">
                  <RemoveCircle />
                </ListItemIcon> */}
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem key={value + 2} dense button>
                    <Avatar alt="Remy Sharp" src={'./images/img9.jpg'} />
                    <ListItemText
                      primary={
                        <span>
                          `Line item ${value + 1}` <p>halo</p> <h3>test</h3>{' '}
                        </span>
                      }
                    />

                    <ListItemSecondaryAction>
                      {/* <ListItemIcon   style={{color: '#0066ff',   }} aria-label="Comments">
                  <Payment />
                </ListItemIcon>                 */}
                      <ListItemIcon
                        style={{ color: '#ff3d00' }}
                        aria-label="Comments"
                      >
                        <RemoveCircle />
                      </ListItemIcon>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {/* ) )} */}
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
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
