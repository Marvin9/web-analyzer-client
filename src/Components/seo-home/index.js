import React, { useState } from 'react';
import GetURL from './Components/GetURL';
import Report from './Components/Report';

export default function index() {
  const [report, changeReport] = useState([]);
  const [loader, changeLoader] = useState(false);

  const api = 'http://localhost:3000/api';

  const getReport = (url) => {
    changeLoader(true);
    fetch(`${api}/analyze?url=${url}`)
      .then((res) => res.json())
      .then((generatedReport) => {
        if (generatedReport.error) { }  // eslint-disable-line
        else changeReport([...generatedReport]);
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        changeLoader(false);
      });
  };

  return (
    <>
      <GetURL dispatchUrl={getReport} />
      { loader
        ? (
          <div className="d-flex justify-content-center">
            <div
              className="spinner-border"
              role="status"
              style={{
                width: '4rem',
                height: '4rem',
              }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
        : <Report report={report} /> }
    </>
  );
}
