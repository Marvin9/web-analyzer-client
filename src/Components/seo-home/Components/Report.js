import React, { useState } from 'react';
import Card from './Card';

export default function Report() {
  const [rules] = useState([{
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  }, {
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  },
  {
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  },
  {
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  }, {
    title: 'Rule1',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
    follow: false,
  },
  {
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  },
  ]);
  return (
    <>
      <div className="row">
        {rules.map((rule) => (
          <div key={`${rule.name}_${Date.now()}`} className="col-sm-3 mb-3">
            <Card rule={rule} />
          </div>
        ))}
      </div>
    </>
  );
}
