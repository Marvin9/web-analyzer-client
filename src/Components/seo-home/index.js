import React, { useState } from 'react';
import GetURL from './Components/GetURL';
import Report from './Components/Report';

export default function index() {
  const [report, changeReport] = useState([]);
  const api = 'http://localhost:3000/api';
  const getReport = (url) => {
    fetch(`${api}/analyze?url=${url}`)
      .then((res) => res.json())
      .then((generatedReport) => {
        changeReport([...generatedReport]);
      })
      .catch((err) => {
        throw err;
      });
  };

  return (
    <>
      <GetURL dispatchUrl={getReport} />
      <Report report={report} />
    </>
  );
}
