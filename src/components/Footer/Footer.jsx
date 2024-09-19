import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
               <img className="footer-logo" src="/images/logo1.png" alt=""/>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem provident corrupti neque, nam earum alias cupiditate ducimus aliquam debitis natus recusandae autem quibusdam, animi, omnis quisquam officiis delectus quae ab!</p>
               <div className="footer-social-icon">
                <img src="/images/facebook_icon.png" alt=""/>
                <img src="/images/twitter_icon.png" alt=""/>
                <img src="/images/linkedin_icon.png" alt=""/>
               </div>
            </div>
            <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+8801234567890</li>
                    <li>hungerkiller@gmail.com</li>
                    {/* <li><a href="https://youtu.be/9jRTo7ILxQc?si=iny-Unb0nVJclFl4">Website Tutorial</a></li> */}
                </ul>
            </div>
        
        </div>  
        <hr/>
        <p className="footer-copyright">Copyright 2024 @ Hunger-Killer.com -All Right Reserved</p>
    </div>
  )
}

export default Footer