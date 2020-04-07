import React from 'react';
import MenuOption from './MenuOption';

function Footer() {
  return (
    <footer className='footer'>
      <div className='country'>Argentina</div>
      <div className='terms'>
        <div className='business'>
          <ul>
            <MenuOption
              url='https://ads.google.com/intl/es_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'
              text='Advertising'
            />
            <MenuOption
              url='https://www.google.com.ar/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none'
              text='Business'
            />
            <MenuOption
              url='https://about.google/?utm_source=google-AR&utm_medium=referral&utm_campaign=hp-footer&fg=1'
              text='About'
            />
            <MenuOption
              url='https://www.google.com/search/howsearchworks/?fg=1'
              text='How Search works'
            />
          </ul>
        </div>
        <div className='privacy'>
          <ul>
            <MenuOption
              url='https://policies.google.com/privacy?fg=1'
              text='Privacy'
            />
            <MenuOption
              url='https://policies.google.com/terms?fg=1'
              text='Terms'
            />
            <MenuOption
              url='https://www.google.com.ar/preferences?hl=es-419'
              text='Settings'
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
