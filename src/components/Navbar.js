import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SnoopDoge
            {/* <i class='fab fa-typo3' /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/howtobuy'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                How to Buy
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/whitepaper'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                White Paper
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to='/Connect'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Connect
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Connect</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
