import React from 'react';
import './Social.css';

const Social = () => (
  <footer className='social-footer'>
    <div className='container'>
      <div className='text-center center-block'>
        <a href='https://www.facebook.com' id='social-facebook'><i className='fab fa-facebook-f'></i></a>
        <a href='https://twitter.com' id='social-twitter'><i className='fab fa-twitter'></i></a>
        <a href='https://pinterest.com' id='social-pinterest'><i className='fab fa-pinterest'></i></a>
        <a href='https://linkedin.com' id='social-linkedin'><i className='fab fa-linkedin-in'></i></a>
      </div>
    </div>
  </footer>
);

export default Social;