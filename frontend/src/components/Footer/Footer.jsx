import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>dummy contents</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMPANY </h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                <h2> GET IN TOUCH   </h2>
                <ul>
                <li>+9779849507462</li>
                <li>Contact@gmail.com</li>

                </ul>

                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @ kharayo.com - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer
