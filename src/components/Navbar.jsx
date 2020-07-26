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

  /* Copy to clipboard function */

  const copyToClipboard = (str) => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className='topnav' id='myTopnav' ref={topnav}>
      <a href='/' className='active'>
        Home
      </a>
      <a href='/'>Link 1</a>
      <a href='/'>Link 2</a>
      <a href='/'>About</a>
      <a href='/' style={{ margin: '0', padding: '0' }}>
        <img src={logo} className='logo' alt='logo'></img>
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
        Save Journey
      </a>

      {/* Permalink copy button */}
      <button
        className='share'
        onClick={() => {
          copyToClipboard(document.location);
        }}
      >
        <span
          role='img'
          aria-label={'Click to get the sharable URL.'}
          title={'Click to get the sharable URL.'}
          className='share-link-button'
        >
          Copy Permalink
        </span>
        <span
          role='img'
          aria-label={'Click to get the sharable URL.'}
          title={'Click to get the sharable URL.'}
        >
          🔗
        </span>
      </button>
    </div>
  );
}
