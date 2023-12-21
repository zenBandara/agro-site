import { Link } from 'react-router-dom';
//import '../css/main.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

//const pages = ['Home', 'Services', 'Partners', 'Contact', 'FAQ'];

const Navigation = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          <img
            src="./assets/traverse-assets/Traverse-Logo.png"
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            style={{
              width: '200px', // Adjust the width and height as needed
              height: 'auto',

            }}
           />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#0f054c"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
              <Link to="/" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
                <Typography textAlign="center" sx={{ fontSize: '16px' }}>Home</Typography>
              </Link>
              <Link to="/partners" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
                <Typography textAlign="center" sx={{ fontSize: '16px' }}>Partners</Typography>
              </Link>
              <Link to="/service" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
                <Typography textAlign="center" sx={{ fontSize: '16px' }}>Services</Typography>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
                <Typography textAlign="center" sx={{ fontSize: '16px' }}>Contact</Typography>
              </Link>
              <Link to="/faq" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
                <Typography textAlign="center" sx={{ fontSize: '16px' }}>FAQ</Typography>
              </Link>

            </Menu>
          </Box>
          
          {/*
          <Link to="/" style={{ textDecoration: 'none', color: '#0f054c' }}>
            <Typography textAlign="center" sx={{ fontSize: '18px' }}>Home</Typography>
          </Link>
          <Link to="/partners" style={{ textDecoration: 'none', color: '#0f054c' }}>
            <Typography textAlign="center" sx={{ fontSize: '18px' }}>Partners</Typography>
          </Link>
          <Link to="/service" style={{ textDecoration: 'none', color: '#0f054c' }}>
            <Typography textAlign="center" sx={{ fontSize: '18px' }}>Services</Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#0f054c' }}>
            <Typography textAlign="center" sx={{ fontSize: '18px' }}>Contact</Typography>
          </Link>
          <Link to="/faq" style={{ textDecoration: 'none', color: '#0f054c' }}>
            <Typography textAlign="center" sx={{ fontSize: '18px' }}>FAQ</Typography>
          </Link>
              */}
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          <img
            src="./assets/traverse-assets/Traverse-Logo.png"
            alt="Logo"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            style={{
              width: '200px', // Adjust the width and height as needed
              height: 'auto',
              marginRight: '2px',
            }}
          />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
            <Typography textAlign="center" sx={{ fontSize: '16px' }}>Home</Typography>
          </Link>
          <Link to="/partners" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
            <Typography textAlign="center" sx={{ fontSize: '16px' }}>Partners</Typography>
          </Link>
          <Link to="/service" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
            <Typography textAlign="center" sx={{ fontSize: '16px' }}>Services</Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
            <Typography textAlign="center" sx={{ fontSize: '16px' }}>Contact</Typography>
          </Link>
          <Link to="/faq" style={{ textDecoration: 'none', color: '#0f054c', marginRight: '20px' }}>
            <Typography textAlign="center" sx={{ fontSize: '16px' }}>FAQ</Typography>
          </Link>
          </Box>
      
      
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
