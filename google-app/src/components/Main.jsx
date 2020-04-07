import React from 'react';
import Form from './Form';
import Language from './Language';
import Google from '../assets/googleIcon.png';

function Main() {
  return (
    <main class='main'>
      <img class='google' src={Google} alt='Google' />
      <Form />
      <Language />
    </main>
  );
}

export default Main;
