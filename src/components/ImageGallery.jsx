import React from 'react';
import Loader from './Loader.jsx';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const ImageGallery = ({data, currentState, currentLoadState, children}) =>{
  return(
    <>
      {currentState === 'error' && 
      (<h3
        css={{
          width: '70%',
          display: 'flex',
          marginTop: '150px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >The server is not responding &#128533; try later...</h3>)}
      {currentState === 'pending' && (<Loader />)}
      {data.length === 0 && currentState !== 'pending' ? 
        (<p 
          css={{
            display: 'flex',
            marginTop: '150px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >No results found, try again</p>) : 
        (<ul 
          css={{
            display: 'grid',
            maxWidth: 'calc(100vw - 48px)',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gridGap: '16px',
            padding: 0,
            listStyle: 'none',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '108px',
            marginBottom: '-220px',
        }}>
          {children}
        </ul>
        )}
      {currentLoadState === 'pending' && (<Loader />)}
    </>
  )
}

export default ImageGallery;
