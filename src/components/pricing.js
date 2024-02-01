import React from 'react';
import './pricing.css'

const PricingTable = () => {
  const pricingData = [
    {
      title: 'Standard',
      className: '',
      diskSpace: '50GB',
      emailAccounts: '50',
      bandwidth: '50GB',
      subdomains: '10',
      domains: '15',
      price: '12.99',
    },
    {
      title: 'Business',
      className: 'green',
      diskSpace: '50GB',
      emailAccounts: '50',
      bandwidth: '50GB',
      subdomains: '10',
      domains: '15',
      price: '32.99',
    },
    {
      title: 'Premium',
      className: 'blue',
      diskSpace: '50GB',
      emailAccounts: '50',
      bandwidth: '50GB',
      subdomains: '10',
      domains: '15',
      price: '42.99',
    },
  ];

  return (
    <div className="demo">
      <div className="container">
        

        <div className="row">
          {pricingData.map((pricing, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className={`pricingTable ${pricing.className}`}>
                <div className="pricingTable-header">
                  <h3 className="title">{pricing.title}</h3>
                </div>
                <div className="pricing-content">
                  <div className="content">
                    <ul>
                      <li>
                        <span>{pricing.diskSpace}</span> Disk Space
                      </li>
                      <li>
                        <span>{pricing.emailAccounts}</span> Email Accounts
                      </li>
                      <li>
                        <span>{pricing.bandwidth}</span> Bandwidth
                      </li>
                      <li>
                        <span>{pricing.subdomains}</span> Subdomains
                      </li>
                      <li>
                        <span>{pricing.domains}</span> Domains
                      </li>
                    </ul>
                    <div className="price-value">
                      <span>
                        $ <span className="amount">{pricing.price}</span>/month
                      </span>
                    </div>
                  </div>
                  <a href="#" className="pricingTable-signup">
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
