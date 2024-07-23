import logo from "../Images/Logo.png";
import React, { useState } from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'transparent',
  boxShadow: 'none',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Logo = styled('img')({
  width: 150,
  height: 50,
});

const DesktopNav = styled('div')({
  display: 'flex',
  '@media (max-width:600px)': {
    display: 'none',
  },
});

const MenuButton = styled(IconButton)({
  display: 'none',
  '@media (max-width:600px)': {
    display: 'block',
  },
});

const DrawerList = styled('div')({
  width: 250,
});

const NavLink = styled(Button)({
  color: 'white',
  textDecoration: 'none',
  margin: '0 8px',
  '&:hover': {
    color: '#ff4d05',
  },
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Logo src={logo} alt="Logo" />
        <DesktopNav>
          <NavLink component={Link} to="/">Home</NavLink>
          
          <NavLink ><a href="/#about">About us</a></NavLink>
          <NavLink component={Link} to="/skills">Skills</NavLink>
          <NavLink component={Link} to="/education">Education</NavLink>
          <NavLink ><a href="/#Project">Work</a></NavLink>
          <NavLink component={Link} to="/experince">Experience</NavLink>
          <NavLink component={Link} to="/certificate">Certificate</NavLink>
          <NavLink component={Link} to="/resume">Resume</NavLink>
          <NavLink component={Link} to="/contactme">Contact Me</NavLink>
          <NavLink component={Link} to="/blog">Blog</NavLink>
        </DesktopNav>
        <MenuButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </MenuButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <DrawerList role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/#about">
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button component={Link} to="/skills">
                <ListItemText primary="Skills" />
              </ListItem>
              <ListItem button component={Link} to="/education">
                <ListItemText primary="Education" />
              </ListItem>
              <ListItem button component={Link} to="/#project">
                <ListItemText primary="Work" />
              </ListItem>
              
              <ListItem button component={Link} to="/experince">
                <ListItemText primary="Experience" />
              </ListItem>
              <ListItem button component={Link} to="/certificate">
                <ListItemText primary="Certificate" />
              </ListItem>
              <ListItem button component={Link} to="/resume">
                <ListItemText primary="Resume" />
              </ListItem>
              <ListItem button component={Link} to="/contactme">
                <ListItemText primary="Contact Me" />
              </ListItem>
              <ListItem button component={Link} to="/blog">
                <ListItemText primary="Blog" />
              </ListItem>
            </List>
          </DrawerList>
        </Drawer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
