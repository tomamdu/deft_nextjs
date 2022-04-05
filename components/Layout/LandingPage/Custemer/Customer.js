import React from 'react'
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Customer() {
  return (
    <div className='customer'>
      <div className='customer_advert'>
             <Image className={'customer_advert_img'}
             width="150" height="70" 
             src="/assets/sponser/etm.jpg"  />
             <Image className={'customer_advert_img'}
             width="150" height="70" 
             src="/assets/sponser/inter.jpg" />
             <Image className={'customer_advert_img'}
              width="150" height="70" 
             src="/assets/sponser/ride.png"  />
             <Image className={'customer_advert_img'}
              width="150" height="70" 
             src="/assets/sponser/dangote.jpg"  />
             <Image className={'customer_advert_img'}
              width="150" height="70" 
             src="/assets/sponser/ride.png"  />
             <Image className={'customer_advert_img'}
              width="150" height="70" 
             src="/assets/sponser/dangote.jpg"  />
             
      </div>
      <div className='customer_users_box'>
        <div className='customer_users_box_icon'>
        <Image 
            width="70" height="70" 
             src="/assets/home-star.png"/>
        </div>
        
        <div className='customer_users_box_text'>
              <div className='customer_users_box_title'>4.7/5 Customer Satisfaction</div>
              <div className='customer_users_box_body'>10,000+ Users</div>
        </div>
        
      </div>

      <div className='customer_matching_box'>
        <div className='customer_matching_box_img'>
        <Image 
            width="320" height="600" 
             src="/assets/ss3.png"/>
        </div>
        
        <div className='customer_matching_box_text'>
              <div className='customer_matching_box_title'>OUR COMMUNITY</div>
              <div className='customer_matching_box_title'>Online Platform Matching Helpers And Employers</div>
              <div className='customer_matching_box_body'>Do you want to use an ethical and transparent platform to connect your family with potential candidates or employers? Are you quickly looking for a Domestic Helper, maid or Driver?
HelperPlace is the best way to match your expectations with the right candidates or with any foreign domestic helpers. Post your job offer and easily access to all our candidates. Our solution is free for candidates and we do not have any hidden fees.</div>
              <div className='customer_matching_choose_buttons'>
                   <Stack spacing={15} direction="row">
                       <Button className='lookingdeft_left_button' variant="contained" size="large">Find Candidate</Button>
                       <Button className='lookingdeft_right_button' variant="contained" size="large">Get A Job</Button>
                    </Stack>
            </div>
        </div>
        
      </div>
     
    </div>
  )
}

export default Customer