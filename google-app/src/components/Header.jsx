import React from 'react';
import HeaderOption from './HeaderOption';
import UserIcon from './UserIcon';
import MoreApps from './MoreApps';

function Header() {
  return (
    <header class='header'>
      <ul class='options'>
        <HeaderOption
          aClassName='gmail'
          url='https://google.com'
          name='Gmail'
        />
        <HeaderOption
          aClassName='images'
          url='https://google.com'
          name='Images'
        />
        <MoreApps />
        <UserIcon letter='E' />
      </ul>
    </header>
  );
}

export default Header;
