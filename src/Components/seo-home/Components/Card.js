import React from 'react';
import PropTypes from 'prop-types';
import '../../../../public/css/card.css';

export default function Card({ rule, changeModal }) {
  return (
    <>
      <div className={`card text-white ${rule.follow ? 'bg-success' : 'bg-danger'}`} style={{ cursor: 'pointer' }}>
        <div className="card-header">
          { rule.ruleName }
          &nbsp; &nbsp;
          { rule.follow ? '✅' : '❌' }
        </div>
        <div className="card-body">
          { rule.desc }
        </div>
        {/* eslint-disable-next-line */}
        <div className={`card-footer ${rule.follow ? 'hover-success' : 'hover-danger'} text-center`} data-toggle="modal" data-target="#ruleModal" onClick={changeModal} >
          <h2>
            +
          </h2>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  rule: PropTypes.shape({
    ruleName: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    follow: PropTypes.bool,
  }).isRequired,
  changeModal: PropTypes.func.isRequired,
};
