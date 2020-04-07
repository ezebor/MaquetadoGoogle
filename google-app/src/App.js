import React from 'react';
import './App.css';
import Google from './assets/googleIcon.png';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main class='main'>
        <img class='google' src={Google} alt='Google' />
        <form action='get' class='form'>
          <div class='searchBox'>
            <input type='text' class='searchInput' />
            <div class='searchIcons'>
              <i class='searchIcon material-icons'>search</i>
              <i class='micIcon material-icons'>mic</i>
            </div>
          </div>
          <div class='submitInputs'>
            <input type='submit' class='submit' value='Buscar en Google' />
            <div class='inputSpace'></div>
            <input type='submit' class='submit' value='Voy a tener suerte' />
          </div>
        </form>
        <p class='language'>
          Google offered in:
          <a href='https://google.com'>Español (Latinoamérica)</a>
        </p>
      </main>
      <footer class='footer'>
        <div class='country'>Argentina</div>
        <div class='terms'>
          <div class='business'>
            <ul>
              <li>
                <a href='https://ads.google.com/intl/es_ar/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1'>
                  Advertising
                </a>
              </li>
              <li>
                <a href='https://www.google.com.ar/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none'>
                  Business
                </a>
              </li>
              <li>
                <a href='https://about.google/?utm_source=google-AR&utm_medium=referral&utm_campaign=hp-footer&fg=1'>
                  About
                </a>
              </li>
              <li>
                <a href='https://www.google.com/search/howsearchworks/?fg=1'>
                  How Search works
                </a>
              </li>
            </ul>
          </div>
          <div class='privacy'>
            <ul>
              <li>
                <a href='https://policies.google.com/privacy?fg=1'>Privacy</a>
              </li>
              <li>
                <a href='https://policies.google.com/terms?fg=1'>Terms</a>
              </li>
              <li>
                <a href='https://www.google.com.ar/preferences?hl=es-419'>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
