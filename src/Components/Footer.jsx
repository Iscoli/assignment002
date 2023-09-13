import React from 'react'
import { ReactComponent as Facebook} from "../Assets/icons8-facebook.svg";
import { ReactComponent as Instagram} from "../Assets/icons8-instagram.svg";
import { ReactComponent as Twitter} from "../Assets/icons8-twitter.svg";
import { ReactComponent as Youtube} from "../Assets/icons8-youtube.svg";
function Footer() {
  return (
    <footer className='footer-container'>
    <div className='footericon-container'>
      <Facebook className='footer-icon'/>
      <Instagram className='footer-icon'/>
      <Twitter className='footer-icon'/>
      <Youtube className='footer-icon'/>
    </div>
    <div className='footer-policy'>
    <p>condition of use</p>
  &nbsp;&nbsp;&nbsp;
  <p>privacy & policy</p>
  &nbsp;&nbsp;&nbsp;
  <p>Press Room</p>
    </div>
    <div>
      
    </div>
    </footer>
  )
}

export default Footer
