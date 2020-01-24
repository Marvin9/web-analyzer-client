import React, { useState } from 'react';
import PropTypes from 'prop-types';
import colors from '../../../themeStore';

export default function GetURL({ dispatchUrl }) {
  const [url, changeUrl] = useState('');

  const submitUrl = () => {
    dispatchUrl(url);
    changeUrl('');
  };

  return (
    <>
      <div className="jumbotron mt-5 pt-2 pb-2" style={{ background: 'none' }} id="analyze-seo-form">
        <h1 className="text-center text-white">Analyze SEO</h1>
        <br />
        <form className="form-inline justify-content-center mt-3" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              id="urlInput"
              className="form-control form-control-lg p-4"
              placeholder="github.com/Marvin9"
              value={url}
              onChange={(e) => changeUrl(e.target.value)}
              onKeyDown={(e) => { if (e.which === 13) submitUrl(); }}
              style={{
                background: colors.lighter,
                color: '#fff',
              }}
            />
            <button
              type="button"
              className="btn btn-primary btn-lg ml-sm-3 mt-2 mt-sm-0 analyze-btn"
              onClick={() => { submitUrl(); }}
              style={{
                background: colors.royal,
              }}
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
