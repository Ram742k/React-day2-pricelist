import React from 'react';
import './App.css';
import PriceCard from './components/PriceCard';

const plans = [
  {
    name: 'FREE',
    price: '$0.00',
    features: [
      '10GB Storage',
      '5 Users Allowed',
      'Send up to 30MB/s',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
      'Unlimited SSL Certificates',
      '24/7 Customer Support',
      'Free Installment',
    ],
  },
  {
    name: 'PLUS',
    price: '$9.00',
    features: [
      '25GB Storage',
      '10 Users Allowed',
      'Send up to 50MB/s',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
      'Unlimited SSL Certificates',
      '24/7 Customer Support',
      'Free Installment',
    ],
  },
  {
    name: 'PRO',
    price: '$49.00',
    features: [
      '50GB Storage',
      '20 Users Allowed',
      'Send up to 100MB/s',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports',
      'Unlimited SSL Certificates',
      '24/7 Customer Support',
      'Free Installment',
    ],
  },
];

const App = () => {
  return (
    <div className="container">
      <h1>Pricing Plans</h1>
        <p>
          Choose the best plan for your business.
        </p>
      <div className="row">
        
        {plans.map((plan, index) => (
          <PriceCard key={index} name={plan.name} price={plan.price} features={plan.features} />
        ))}
      </div>
    </div>
  );
};

export default App;
