import React from 'react';

export default function GetURL() {
  return (
    <>
      <div className="jumbotron mt-3 pt-5" style={{ background: 'none' }}>
        <h1 className="text-center">Analyze SEO</h1>
        <br />
        <form className="form-inline justify-content-center">
          <div className="form-group">
            <input
              type="text"
              id="urlInput"
              className="form-control form-control-lg"
              placeholder="github.com/Marvin9"
            />
            <button type="button" className="btn btn-primary btn-lg ml-sm-2 mt-2 mt-sm-0">
              Analyze
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
