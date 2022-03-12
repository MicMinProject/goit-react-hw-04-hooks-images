import React from 'react';
import { Circles } from  'react-loader-spinner'
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';


const Loader = () =>{
  return(
    <div 
      css={{
        marginTop: '108px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Circles
      height="100"
      width="100"
      color='slateblue'
      ariaLabel='loading'
    />
    </div>
  )
}

export default Loader;