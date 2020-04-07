import React from 'react';
import Search from '@material-ui/icons/Search';
import Mic from '@material-ui/icons/Mic';

function Form() {
  return (
    <form action='get' className='form'>
      <div className='searchBox'>
        <input type='text' class='searchInput' />
        <div className='searchIcons'>
          <Search className='searchIcon' />
          <Mic className='micIcon' />
        </div>
      </div>
      <div className='submitInputs'>
        <input type='submit' className='submit' value='Buscar en Google' />
        <div className='inputSpace'></div>
        <input type='submit' className='submit' value='Voy a tener suerte' />
      </div>
    </form>
  );
}

export default Form;
