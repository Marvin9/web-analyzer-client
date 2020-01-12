import React from 'react';
import PropTypes from 'prop-types';

export default function Modal({ rule }) {
  return (
    <div className="modal fade" id="ruleModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              { rule.ruleName }
            </h5>
            <button className="close" type="button" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { rule.desc }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  rule: PropTypes.shape({
    ruleName: PropTypes.string,
    desc: PropTypes.string,
  }).isRequired,
};
