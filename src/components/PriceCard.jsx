import React from 'react';
import '../App.css';

const PriceCard = ({ name, price, features }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <small>{name}</small>
          <h1 className="card-title pricing-card-title">
            {price}
            <small className="text-muted">/month</small>
          </h1>
        </div>
        <div className="card-body">
         
          <ul className="list-unstyled mt-3 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-outline-primary">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
