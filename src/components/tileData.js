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
 
export const mailFolderListItems = (
   <div> 
    <ListItem button>
     
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <Link to="/home">
      <ListItemText primary="Home" /></Link>      
    </ListItem>
   
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
       <Link to="/Sponsors">
       <ListItemText primary="Sponsors" />
       </Link> 
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>  
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link to="/about">
      <ListItemText primary="Accounting" /></Link> 
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Link to="/about">
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
    <ListItemLink   >
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemLink >
    
  </div>
);