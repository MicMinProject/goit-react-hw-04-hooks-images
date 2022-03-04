import Searchbar from './Searchbar.jsx';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

export const App = () => {
  return (
    <div
      css={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        color: '#010101',
      }}
    >
      <Searchbar />
    </div>
  );
};
