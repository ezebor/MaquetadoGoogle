import React from 'react';

function MenuOption({ aClassName, text, url }) {
  return (
    <a
      className={aClassName}
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  );
}

export default MenuOption;
