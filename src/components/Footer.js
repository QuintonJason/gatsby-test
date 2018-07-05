import React from 'react';
import Link from 'gatsby-link';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-mailing">
        <div className="footer-mailing__heading">
          <h2 className="">Join our mailing list</h2>
          <p className="">Get event updates as we get closer to the big event.</p>
        </div>
        <form className="footer-mailing__form">
          <label className="t-hidden">Your email</label>
          <input type="email" id="mce-EMAIL" className="footer-mailing__input" name="EMAIL" placeholder="Your email" value=""/>
          <input type="submit" className="footer-mailing__submit" />
        </form>
      </div>
      <div className="footer-register">
        <h2 className="t-section-headline footer-register__headline">Activate with us</h2>
        <a href="#0" className="btn btn-lg footer-register__link">Register Today</a>
      </div>
    </footer>
  );
};

export default Footer;