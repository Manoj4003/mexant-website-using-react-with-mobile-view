import React from 'react';
import './BusinessSolution.css';
import Button from 'react-bootstrap/Button';

function BusinessSolution() {
  return (
    <div className="Business-solution">
      <div className="tittle">
        <h1 className="text-white">
          Business <span>Solutions</span> and <br />
          <em>Crypto</em> Investments
        </h1>
      </div>
      <div className="btn-grup2">
        <Button variant="success" className="btn-1">Success</Button>
        <Button variant="danger" className="btn-2">Danger</Button>
      </div>
    </div>
  );
}

export default BusinessSolution;
