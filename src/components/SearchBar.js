import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
  return (
    <section>
      <h2 className='SearchBar__Heading'>Search Bar</h2>
      <form className='SearchBar__form'>
        <input className='SearchBar__input'
          type='text'
          placeholder='Search Github'
          name='Search Github'
        ></input>
        <button classNamp='SearchBar__button' type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default SearchBar;
