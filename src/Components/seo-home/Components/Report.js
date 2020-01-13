import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import Modal from './Modal';

export default function Report({ report, error }) {
  const [currentModal, changeCurrentModal] = useState(0);

  const changeModal = (index) => {
    changeCurrentModal(index);
  };

  if (error.err) {
    return (
      <div className="alert alert-danger">
        Cannot fetch that URL : &nbsp;
        { error.url }
      </div>
    );
  }

  if (report.length) {
    return (
      <>
        <div className="row">
          {report.map((rule, index) => (
            <div key={`${rule.ruleName}_${Date.now() + index}`} className="col-sm-3 mb-3">
              <Card rule={rule} changeModal={() => changeModal(index)} />
            </div>
          ))}
        </div>
        <Modal rule={report[currentModal]} />
      </>
    );
  }
  return <></>;
}

Report.propTypes = {
  report: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.shape({
    err: PropTypes.bool,
    url: PropTypes.string,
  }).isRequired,
};
