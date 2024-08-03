import './footer-style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Find us here</h3>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google-plus fa-2x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-pinterest fa-2x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact with us</h3>
            <p className="footer-text">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
            <p className="footer-text">
              <i className="fas fa-envelope"></i> Send us e-mail
            </p>
            <p className="footer-text">
              <i className="fas fa-phone"></i> lalala@yeyeye.com
            </p>
          </div>

          {/* Location Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Location</h3>
            <p className="footer-text">Weaboo Universe</p>
            <p className="footer-text">Jl. Isekai</p>
            <p className="footer-text">Jakarta</p>
            <p className="footer-text">Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;