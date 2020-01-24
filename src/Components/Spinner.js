import React from 'react';
import colors from '../themeStore';

export default () => (
  <div className="d-flex justify-content-center">
    <div
      className="spinner-border"
      role="status"
      style={{
        width: '4rem',
        height: '4rem',
        color: colors.dark,
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
