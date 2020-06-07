import React from 'react';
import logo from '../img/logo.png';

export function Navbar() {
  let icon = React.createRef();
  let topnav = React.createRef();

  function NavBarResponsive() {
    var classname = topnav.current.className;

    if (classname === 'topnav') {
      topnav.current.className += ' showmenu';
    } else {
      topnav.current.className = 'topnav';
    }
  }

  return (
    <div className='topnav' id='myTopnav' ref={topnav}>
      <a href='/' className='active'>
        Home
      </a>
      <a href='/'>Link 1</a>
      <a href='/'>Link 2</a>
      <a href='/'>About</a>
      <a href='/' style={{ margin: '0', padding: '0' }}>
        <img
          src={logo}
          style={{ maxWidth: '220px', padding: '0', margin: '0' }}
          alt='logo'
        ></img>
      </a>

      <a className='icon' ref={icon} onClick={NavBarResponsive}>
        <div>
          <b>|||</b>
        </div>
      </a>
      <a
        href='/'
        style={{ float: 'right', background: '#fff', color: '#000000' }}
      >
        Start Journey
      </a>
    </div>
  );
}
