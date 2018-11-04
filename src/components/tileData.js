// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import {   Link } from "react-router-dom";
 
const styles ={
  
}

export const mailFolderListItems = (
   <div> 
    <ListItem button>
     
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <Link  style={{ textDecoration: 'none' }}  to="/home">
      <ListItemText primary="Home" /></Link>      
    </ListItem>
   
    <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <Link  style={{ textDecoration: 'none' }}  to="/Sponsors"> 
       <ListItemText primary="Sponsors" />
       </Link> 
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <Link  style={{ textDecoration: 'none' }} to="/about">
      <ListItemText primary="Requests" />
      </Link> 
    </ListItem>  
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link  style={{ textDecoration: 'none' }} to="/about">
      <ListItemText primary="Accounting" /></Link> 
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link  style={{ textDecoration: 'none' }}  to="/about">
      <ListItemText primary="Help" /></Link> 
    </ListItem>
  </div> 
  
);

export const otherMailFolderListItems = (
  <div>
  {/*
  // <ListItemLink href="#simple-list">
  //         <Link to="/home">
  //     <ListItemText primary="Home" /></Link>
  //       </ListItemLink>
 */}
     <ListItem button>
      <ListItemIcon>
      <StarIcon />
      </ListItemIcon>
      <Link style={{ textDecoration: 'none' }} to="/about">
        <ListItemText primary="My History" />
        </Link> 
    </ListItem  >

    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link style={{ textDecoration: 'none' }} to="/about">
      <ListItemText primary="Goto Events" /></Link> 
    </ListItem>
  </div>
);