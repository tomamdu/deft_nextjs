import React from 'react'
import Link from 'next/link'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LoginModal from '../../../Modal/LoginModal';
import RegisterModal from '../../../Modal/RegisterModal';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function Header() {
  // Login Modal
 

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='header'>
      <div className='header_left'>
          <Stack spacing={2} direction="row">
             
            <Link className="nav-link" href="/" >
                <Button className='header_left_button' variant="text">Home</Button>
             </Link>
             <Link className="nav-link" href="/find-job" >
                <Button className='header_left_button' variant="text">JOBS</Button>
             </Link>
             <Link className="nav-link" href="/find-candidate" >
                <Button className='header_left_button' variant="text">CANDIDATES</Button>
             </Link>
             
             <Button className='header_left_button' variant="text">AGENCY SERVICES</Button>
             <Button className='header_left_button' variant="text">NEWS & MORE</Button>
             <Button className='header_left_button'
                     id="demo-customized-button"
                     aria-controls={open ? 'demo-customized-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     variant="text"
                     disableElevation
                     onClick={handleClick}
                     endIcon={<KeyboardArrowDownIcon />}
                   >
                   NEWS & MORE
             </Button>
                   <StyledMenu
                     id="demo-customized-menu"
                     MenuListProps={{
                       'aria-labelledby': 'demo-customized-button',
                     }}
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                   >
                     <MenuItem onClick={handleClose} disableRipple>
                       Tips & News
                     </MenuItem>
                     <MenuItem onClick={handleClose} disableRipple>
                       Training
                     </MenuItem>
                     
                   </StyledMenu>
          </Stack>
      </div>
      <div className='header_right'>
          <Stack spacing={2} direction="row">
             <LoginModal  />
             <Link className="nav-link" href="/register" >
             <RegisterModal/>
             </Link>
             
          </Stack>
      </div>
    </div>
  )
}

export default Header