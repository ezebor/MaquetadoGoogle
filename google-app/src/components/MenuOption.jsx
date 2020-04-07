import React from 'react';

function MenuOption({ aClassName, text, url }) {
  return (
    <li className={aClassName}>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    </li>
  );
}

export default MenuOption;
