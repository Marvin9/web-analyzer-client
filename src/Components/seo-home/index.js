import React, { useState } from 'react';
import GetURL from './Components/GetURL';
import Report from './Components/Report';
import apiURL from '../../../serverURL';
import Spinner from '../Spinner';

export default function index() {
  const [report, changeReport] = useState([]);
  const [loader, changeLoader] = useState(false);
  const [error, changeError] = useState({ err: false, url: '' });

  const api = apiURL;

  const getReport = (url) => {
    changeLoader(true);
    changeError({ err: false, url: '' });

    fetch(`${api}/analyze?url=${url}`)
      .then((res) => res.json())
      .then((generatedReport) => {
        if (generatedReport.error) {
          changeReport([]);
          changeError({
            err: true,
            url,
          });
        } else changeReport([...generatedReport]);
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
        ? <Spinner />
        : <Report report={report} error={error} /> }
    </>
  );
}
