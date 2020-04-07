import React from 'react';

function HeaderOption({ aClassName, name, url }) {
  return (
    <li className={aClassName}>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
    </li>
  );
}

export default HeaderOption;
