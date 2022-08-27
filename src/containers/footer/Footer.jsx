import React from 'react';
import './footer.css';

const Footer = (props) => {

  return (
    <>

        <div className="footer_wrapper">
            <div className="footer_first_section">
                <p className="footer_logo">Auction</p>
                <p className="footer_left_para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th</p>
                <div className="footer_icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-discord"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-telegram"></i>
                </div>
            </div>
            <div className="footer_second_section">

              <p className="footer_heading_2">Useful Links</p>
              <ul>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Features</a></li>
                <li><a>Privacy Policy</a></li>
              </ul>

            </div>
            <div className="footer_third_section">
            <p className="footer_heading_2">Support</p>
              <ul>
                <li><a>Tutorials</a></li>
                <li><a>Docs</a></li>
                <li><a>Forum</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <div className="footer_fourth_section">
            <p className="footer_heading_2">Contact Us</p>
            <br/>
            <p className="footer_para">Bengaluru ( India ) <br/>
              184-A, Delta Arcade, <br/>
              Karnataka - 560102</p>
              <br/><br/>
            <p className="footer_para">Phone : +91 8756294967</p>
            <br/><br/>
            <p className="footer_para">Email : Support@cloudegic.com</p>
            </div>
        </div>
    </>
  );
};

export default Footer;