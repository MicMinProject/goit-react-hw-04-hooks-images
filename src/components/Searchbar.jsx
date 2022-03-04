import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const Searchbar = ({onSubmit, value})=>{
  return(
    <header class="searchbar">
      <form class="form" onSubmit={onSubmit}>
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          value={value}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default Searchbar;