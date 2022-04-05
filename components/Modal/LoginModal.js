import * as React from 'react';
import Link from 'next/dist/client/link';
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
  width: 500,
  overflow:'scroll',
  height:'100%',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button className='header_left_button_login' variant="contained" onClick={handleOpen}>LogIn</Button>
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
                    Login
               </Typography>
           
          

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
          
         <div className='Login_modal_box_item'>
              <div>Remember me</div> 
              <div>Forgot Password ?</div> 
         </div>

         <div className='Login_modal_box_item'>
             <Link  href="/dashbord">
                  <Button  className='header_left_button_login ' variant="contained">LogIn</Button>
             </Link>
              
         </div>

         <div className='Login_modal_box_item'>New User? Sign Up here</div>
         </div>
      
     
   
        </Box>
      </Modal>
    </div>
  );
}