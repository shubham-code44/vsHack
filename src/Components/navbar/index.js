import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton, Typography, Container, Paper, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import flag from "./ic_en.png"
import avatar from "./#Img_Avatar.25.png"

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" style={{boxShadow: "None"}}>
      <Container>
        <Toolbar style={{ display: 'flex', justifyContent: "space-between",padding: '0px'}}>
          <Paper style={{boxShadow: "none", width: "100%"}}
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '300px' }}
          >
            <InputBase 
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  <IconButton color="inherit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Paper>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
            <img src={flag} alt="" />
            </IconButton>
            <IconButton color="inherit">
              <WorkIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <IconButton color="inherit">
            <img src={avatar} alt="" />
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
