import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import Loader from './Loader.jsx';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({data, currentState, onClick}) =>{
  return(
    <>
    
    {currentState === 'error' && (<h3>The server is not responding, try later...</h3>)}
    {currentState === 'success' && (data.map(item => (
      <li key={item.id} id={item.id} onClick={onClick}
        css={{
          position: 'relative',
          height: '260px',
          borderRadius: '2px',
          boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
        }}>
          <img
            css={{
              position: 'absolute',
              zIndex: '-10',
              width: '100%',
              height: '260px',
              objectFit: 'cover',
              transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                transform: 'scale(1.03)',
                cursor: 'zoom-in',
              },
            }} 
            src={item.webformatURL} alt="search result" 
          />
      </li>)))}
    </>
  )
}

// ImageGalleryItem.propTypes ={
//   data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.node)))
// }

export default ImageGalleryItem;