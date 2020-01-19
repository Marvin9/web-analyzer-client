import React, { useState, useEffect } from 'react';
import apiURL from '../../../serverURL';
import Spinner from '../Spinner';
import List from './Components/List';

export default () => {
  const [list, changeList] = useState([]);
  const [loader, changeLoader] = useState(false);
  const [error, changeError] = useState(false);

  useEffect(() => {
    if (list.length === 0) {
      changeLoader(true);
      fetch(`${apiURL}/rules`)
        .then((res) => res.json())
        .then((rules) => {
          changeList([...rules]);
          changeError(false);
        })
        .catch(() => {
          changeError(true);
        })
        .finally(() => {
          changeLoader(false);
        });
    }
  });

  return (
    <div className="mt-5 mb-5">
      { loader
        ? <Spinner />
        : (
          <>
            {error
              ? (
                <div className="alert alert-danger">
                  Something bad happened to us.
                </div>
              )
              : <List rulesList={list} />}
          </>
        ) }
    </div>
  );
};
