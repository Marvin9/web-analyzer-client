import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../../themeStore';

const modalStyle = {
  background: colors.dark,
  color: '#fff',
  boxShadow: '-4px 4px 16px -6px rgba(0,0,0,0.41)',
};

export default function Modal({ rule }) {
  return (
    <div className="modal fade" id="ruleModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content" style={modalStyle}>
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
            <br />
            <br />
            <code>
              { rule.example }
            </code>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={modalStyle}>Close</button>
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
    example: PropTypes.string,
  }).isRequired,
};
