import React from 'react'
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function LookingDeft() {
  return (
    <div className='lookingdeft'>
        <div className='lookingdeft_img_container'>
         <Image    
                   className={'lookingdeft_image'}
                   layout="fill"
                   src="/assets/img/addis.jpg" alt />
        </div>
        <div className='lookingdeft_box_container'>
            <div className='lookingdeft_title'>Looking for the best Domestic Helpers?</div>
            
            <div className='lookingdeft_title_two'>Easily connects Helpers and Employers</div>

            <div className='lookingdeft_choose_buttons'>
                   <Stack spacing={15} direction="row">
                       <Button className='lookingdeft_left_button' variant="contained" size="large">JOBS</Button>
                       <Button className='lookingdeft_right_button' variant="contained" size="large">CANDIDATES</Button>
                    </Stack>
            </div>
        </div>           
    </div>
 
  )
}

export default LookingDeft