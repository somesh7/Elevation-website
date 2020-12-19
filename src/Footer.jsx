import React from 'react';
import {NavLink} from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
    return (
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000023" fill-opacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path></svg>
        <div className="about_footer1">
            <h2 className="footer_heading"> ABOVE. BEYOND. TOGETHER </h2>
            <div className="input-group mb-5 mt4">
  <input type="text" className="form-control" placeholder="your Email Address" aria-label="Email" aria-describedby="basic-addon2" />
  <div className="input-group-append">
  <button class="btn btn-primary" type="submit">Next</button>
  </div>
</div>
<NavLink className="btn3 btn-link" to="/portfolio" role="button">portfolio</NavLink>
<NavLink className="btn3 btn-link" to="/stories" role="button">stories</NavLink>
<NavLink className="btn3 btn-link" to="/team" role="button">team</NavLink>
<NavLink className="btn3 btn-link" to="/career" role="button">career</NavLink>


   <p> <EmailIcon /> info@elevationcapital.com </p>
   <p> <CallIcon /> +91 124 4965500 </p>
        </div>
           <div className="about_footer">
           
<h6> Delhi-NCR, India </h6>
<p>1502, 15th Floor, One Horizon, Sector 43, DLF Phase V, Golf Course Road, Gurgaon 122002</p>
<h6> Bengaluru, India </h6>
<p> No. 23, 6th Floor, Leela Collonnade, HAL Old Airport Rd, Bengaluru 560008 </p>

<p>Privacy & Terms 
© 2020 Elevation Capital.</p> <p> All rights reserved. </p>
                        
                         
     <p className="icon_div"> 
     <TwitterIcon /> 
      <LinkedInIcon /> 
      </p>
                 

           </div>
           
        </>
    );
}
export default Footer;