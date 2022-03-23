import React from 'react';
import PortalModal from './PortalModal.jsx';
import PropTypes from 'prop-types';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class Modal extends React.Component {
  
  render(){

    const {image, onClick, onKeyPress} = this.props;

    const modal = image !== '' ? (
      <PortalModal>
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
      </PortalModal>
    ) : null
  
    return(
      <div>
        {modal}
      </div>
    )
  }
}

Modal.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
}

export default Modal;