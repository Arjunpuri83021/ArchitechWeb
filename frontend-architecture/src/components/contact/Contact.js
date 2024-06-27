import React, { useState } from 'react';
import "./contact.css";
import Contactquery from './Contactquery';
import Contactcarrier from './Contactcarrier';
import Contactform from './Contactform';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('query');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="contactcategory d-flex align-items-center flex-column gap-4">
      <div className="btn  ">
        <button type="button" className="border-on-hover me-1 " onClick={() => handleTabChange('query')}>
          Contact
        </button>
        
  
        <button type="button" className="border-on-hover" onClick={() => handleTabChange('carrier')}>
          Carrier
        </button>
      </div>
      <div className="routeofcategory">
        {activeTab === 'query' && <Contactquery />}
        {activeTab === 'carrier' && <Contactform />}
      </div>
    </div>
  );
};

export default Contact;