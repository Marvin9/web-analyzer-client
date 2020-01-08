import React from 'react';
import PropTypes from 'prop-types';
import '../../../../public/css/card.css';

export default function Card({ rule }) {
  return (
    <>
      <div className={`card text-white ${rule.follow ? 'bg-success' : 'bg-danger'}`} style={{ cursor: 'pointer' }}>
        <div className="card-header">
          { rule.title }
        </div>
        <div className="card-body">
          { rule.description }
        </div>
        <div className={`card-footer ${rule.follow ? 'hover-success' : 'hover-danger'} text-center`}>
          <h2>+</h2>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  rule: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    follow: PropTypes.bool.isRequired,
  }).isRequired,
};
