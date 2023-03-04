import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer__container">
        <span className="footer__logo">
          Countdown Hall
        </span>
        <Link to="/about">About</Link>
        <Link to="/">Download our android app</Link>
        <Link to="/">Language</Link>
      </div>  

      <div className='footer__last-row'>
          <p className='footer__copyright-notice'>
            Copyright © 2023 Countdown Hall
            <a href="https://github.com/erarich">Created by Erick Santos</a>
          </p>
        
        <div className="footer__legal-stuff">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Cookie Policy</Link>
          <Link to="/">Copyright Policy</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;