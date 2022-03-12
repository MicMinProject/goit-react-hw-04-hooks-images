import React from 'react';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Modal = ({image, onClick, onKeyPress}) =>{
  return(
    <div 
      onClick={onClick}
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1200,
      }}
      >
      <KeyboardEventHandler onKeyEvent={onKeyPress} handleKeys={['esc']} />
      <div
        css={{
          maxWidth: 'calc(100vw - 48px)',
          maxHeight: 'calc(100vh - 24px)',
        }}>
        <img 
          css={{
            width: '900px',
            height: '600px',
            objectFit: 'cover',
          }}
          src={image} 
          alt="large size of result" />
      </div>
    </div>
  )
}

export default Modal;