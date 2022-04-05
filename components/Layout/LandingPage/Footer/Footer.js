import React from 'react'
import Image from 'next/image';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_upper'>
            <div className='footer_upper_box'>
                <div className='footer_upper_text'>Free of charges for</div>
                <div className='footer_upper_text'>any Domestic Helpers</div>
                <div className='footer_upper_text'>and Job seekers.</div>
            </div>
            <div className='footer_upper_box'>
                <div className='footer_upper_text'>About Us</div>
                <div className='footer_upper_text'>Contact Us</div>
                <div className='footer_upper_text'>Happy Employers</div>
            </div>
            <div className='footer_upper_box'>
                <div className='footer_upper_text'>Search & find A Job</div>
                <div className='footer_upper_text'>Find Helpers, Maids or Drivers</div>
            </div>
            <div className='footer_upper_box'>
                <div className='footer_upper_text'>Register Now</div>
                <div className='footer_upper_text'>Be one of our partner</div>
            </div>
            <div className='footer_upper_box'>
                <div className='footer_upper_img'>
                   <Image className={'footer_android_img'}
                       width="100" height="30"  
                     src="/assets/android.png"  /> 
                    <Image className={'footer_app_img'}
                       width="100" height="30" 
                     src="/assets/apple.png"  />
                        
                </div>
                <div className='footer_upper_text'>We connect Employers, Maid Agencies and Domestic Helpers in Hong Kong, Singapore, Macau, UAE and Saudi Arabia.</div>
            </div>
        </div>
        <div className='footer_lower'>
        <div className='footer_lower_box'>
                <div className='footer_lower_text'>© 2022 HelperPlace — All Rights Reserved</div>
                <div className='footer_lower_text'>Privacy Policy</div>
            </div>
        </div>
    </div>
  )
}

export default Footer