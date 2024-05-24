import React from 'react';
import '../App.css';

const PriceCard = ({ name, price, features }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {price}
            <small className="text-muted">/mo</small>
          </h1>
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
