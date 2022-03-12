import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const Searchbar = ({onSubmit, value, onChange})=>{
  return(
    <header 
      css={{
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        position: 'fixed',
        zIndex: 1100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '64px',
        paddingRight: '24px',
        paddingLeft: '24px',
        paddingTop: '12px',
        paddingBottom: '12px',
        color: '#fff',
        backgroundColor: '#3f51b5',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        }}>
      <form 
        css={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: '#fff',
          borderRadius: '3px',
          overflow: 'hidden',
        }}
        onSubmit={onSubmit}>
        <button type="submit" 
          css={{
            display: 'inline-block',
            width: '60px',
            height: '48px',
            border: 0,
            padding: 0,
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            opacity: 0.6,
            transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            cursor: 'pointer',
            outline: 'none',
           ' &:hover': {
              opacity: 1,
            },
          }}>
          <span className='search'
            >Search
          </span>
        </button>

        <input
          css={{
            display: 'inline-block',
            width: '100%',
            font: 'inherit',
            fontSize: '20px',
            border: 'none',
            outline: 'none',
            paddingBottom: '5px',
            paddingLeft: '4px',
            paddingRight: '4px',
            '&::placeholder': {
              font: 'inherit',
              fontSize: '18px',
            }
          }}
          type="text"
          name='search'
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  )
}

export default Searchbar;