import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const Button = ({onClick, data}) =>{
  return(
    data.length === 0 ? '' : <button 
    css={{
      padding: '8px 16px',
      marginTop: '240px',
      borderRadius: '2px',
      backgroundColor: '#3f51b5',
      transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      textAlign: 'center',
      display: 'inline-block',
      color: '#fff',
      border: 0,
      textDecoration: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: '18px',
      lineHeight: '24px',
      fontStyle: 'normal',
      fontWeight: 500,
      minWidth: '180px',
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      '&:hover, &:focus': {
        backgroundColor: '#303f9f',
      }
    }}
    type='button' onClick={onClick}>Load more</button>
  )
}

export default Button;