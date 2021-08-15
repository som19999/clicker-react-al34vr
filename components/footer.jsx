import React from 'react';
import PropTypes from 'prop-types';


const Footer = (props)=>{
  return (
    <footer className="footer bg-dark">
      <p className="footer-caption text-light text-center">{props.footerTitle}</p>
    </footer>
  );
}

Footer.defaultProps ={
  footerTitle: 'React counter Task @2018'
}

Footer.PropTypes ={
  footerTitle:PropTypes.string
}

export default Footer;