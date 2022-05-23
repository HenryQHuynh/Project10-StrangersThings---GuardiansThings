import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>A Tower market where Guardians can trade with each other, vendors, and cryptarchs alike!</p>
      <h4>A cruddy and cobbled together attempt by a wayward Guardian</h4>
      <a href='https://github.com/HenryQHuynh' target='_blank'>
        <img
          src='https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg'
          alt='GitHub'
        />
      </a>
      <a href='https://www.linkedin.com/in/henryqhuynh/' target='_blank'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt='LinkedIn'
        />
      </a>
      <p id='freehold' >Whether we wanted it or not, we've stepped into a war with the Cabal on Mars. So let's get to taking out their command, one by one. Valus Ta'aurc. From what I can gather he commands the Siege Dancers from an Imperial Land Tank outside of Rubicon. He's well protected, but with the right team, we can punch through those defenses, take this beast out, and break their grip on Freehold</p>
      <h6>- Commander Zuzuvala</h6>
    </footer>
  );
};

export default Footer;
