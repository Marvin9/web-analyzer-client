import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function GetURL({ dispatchUrl }) {
  const [url, changeUrl] = useState('');
  return (
    <>
      <div className="jumbotron mt-3 pt-2 pb-2" style={{ background: 'none' }}>
        <h1 className="text-center">Analyze SEO</h1>
        <br />
        <form className="form-inline justify-content-center">
          <div className="form-group">
            <input
              type="text"
              id="urlInput"
              className="form-control form-control-lg"
              placeholder="github.com/Marvin9"
              value={url}
              onChange={(e) => changeUrl(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary btn-lg ml-sm-2 mt-2 mt-sm-0"
              onClick={() => { dispatchUrl(url); }}
            >
              Analyze
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

GetURL.propTypes = {
  dispatchUrl: PropTypes.func.isRequired,
};
