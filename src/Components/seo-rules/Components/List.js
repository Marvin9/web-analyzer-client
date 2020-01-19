import React from 'react';
import PropTypes from 'prop-types';

const List = ({ rulesList }) => (
  <>
    { rulesList.map((rule) => (
      <div key={`${rule.ruleName}_${rule.tag}`} className="card mb-4" style={{ cursor: 'pointer' }}>
        <div className="card-body">
          <h5 className="card-title">
            Rule name :&nbsp;
            { rule.ruleName }
          </h5>
          <h6 className="card-subtitle text-muted">
            Tag :&nbsp;
            { rule.tag }
          </h6>
          <br />
          <p className="card-text">
            { rule.desc }
            <br />
            <br />
            <code>
              { rule.example }
            </code>
          </p>
        </div>
      </div>
    )) }
  </>
);

List.propTypes = {
  rulesList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
