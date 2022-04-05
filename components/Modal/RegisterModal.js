import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { withTheme } from '@emotion/react';


import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow:'scroll',
  width: 500,
  height:'100%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function RegisterModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button className='header_left_button_login' variant="contained" onClick={handleOpen}>REGISTER</Button>
      <Modal
        
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='Login_modal' sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            Deft
          </Typography>
          
           
         <div className='Login_modal_box' >
          <Typography  className='Login_modal_box_item' id="modal-modal-title" variant="h6" component="h2">
             REGISTER
           </Typography>

          <TextField
            className='Login_modal_box_item'
            id="fullWidth"
            label="Name"
          />
          <TextField
            className='Login_modal_box_item'
            id="fullWidth"
            label="Email"
            type="email"
          />
         <TextField
          className='Login_modal_box_item'
          id="outlined-error-helper-text"
          label="Password"
          type="password"
         
         />
         <TextField
          className='Login_modal_box_item'
          id="outlined-error-helper-text"
          label="Confirm Password"
          type="password"
         
         />
          
         <div className='Login_modal_box_item'>
              <div>By clicking Sign Up, you agree to the Helperplace Terms & Conditions, and Privacy Policy.</div> 
              
         </div>

         <div className='Login_modal_box_item'>
              <Button  className='header_left_button_login ' variant="contained" onClick={handleOpen}>Sign Up</Button>
         </div>

         <div className='Login_modal_box_item'>Already a User? Sign in</div>
         </div>
      
     
   
        </Box>
      </Modal>
    </div>
  );
}