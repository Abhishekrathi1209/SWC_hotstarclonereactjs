import "../styles/Footer.css"

const Footer = () => {
    return ( 
        <div className="homepagefooter">
            <div className="footer1">
                <div className="company">
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className="viewwebin">
                    <h4>View Website In</h4>
                    <ul>
                        <li>English</li>
                    </ul>
                </div>
                <div className="needhelp">
                    <h4>Need Help</h4>
                    <ul>
                        <li>Visit Help Center</li>
                        <li>Share Feedback</li>
                    </ul>
                </div>
                <div className="connect">
                    <h4>Connect with us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com/DisneyPlusHotstar" target="_blank"><img src="image/fb-icon.png" alt="fb" /></a></li>
                        <li><a href="https://twitter.com/DisneyPlusHS" target="_blank"><img src="image/twitter-icon.png" alt="twitter" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer2">
                <div className="rightterms">
                    <div className="right">
                        <p>© 2023 STAR. All Rights Reserved.</p>
                    </div>
                    <div className="terms">
                        <ul>
                            <li>Terms of use</li>
                            <li>Privecy Policy</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="appstore">
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore" alt="PlayStore" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore" alt="iosStore" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;