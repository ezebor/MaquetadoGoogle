import React from 'react';
import MenuOption from './MenuOption';
import UserIcon from './UserIcon';
import MoreApps from './MoreApps';

function Header() {
  return (
    <header class='header'>
      <ul class='options'>
        <MenuOption aClassName='gmail' url='https://google.com' text='Gmail' />
        <MenuOption
          aClassName='images'
          url='https://google.com'
          text='Images'
        />
        <MoreApps />
        <UserIcon letter='E' />
      </ul>
    </header>
  );
}

export default Header;
