import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

export default function Report() {
  const [currentModal, changeCurrentModal] = useState(0);
  const [rules] = useState([{
    title: 'Rule1',
    description: 'blah blah',
    follow: true,
  }, {
    title: 'Rule2',
    description: 'blah blah',
    follow: true,
  },
  {
    title: 'Rule3',
    description: 'blah blah',
    follow: true,
  },
  {
    title: 'Rule4',
    description: 'blah blah',
    follow: true,
  }, {
    title: 'Rule5',
    description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
    follow: false,
  },
  {
    title: 'Rule6',
    description: 'blah blah',
    follow: true,
  },
  ]);

  const changeModal = (index) => {
    changeCurrentModal(index);
  }

  return (
    <>
      <div className="row">
        {rules.map((rule, index) => (
          <div key={`${rule.title}_${Date.now() + index}`} className="col-sm-3 mb-3">
            <Card rule={rule} changeModal={() => changeModal(index)} />
          </div>
        ))}
      </div>
      <Modal rule={rules[currentModal]} />
    </>
  );
}
