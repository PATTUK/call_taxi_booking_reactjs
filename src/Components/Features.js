import React from 'react';
import './Features.css'; // Import the CSS styles

const Features = () => {
  const FeaturesCard = [
    {
      IconName: '🚗', // Replaced with emojis/icons for demonstration
      FCTitle: 'Sleek Design',
      FCdescription: 'Aerodynamic body with a stylish finish.',
    },
    {
      IconName: '⚡',
      FCTitle: 'Electric Power',
      FCdescription: 'Powered by a state-of-the-art electric engine.',
    },
    {
      IconName: '🌟',
      FCTitle: 'Premium Features',
      FCdescription: 'Loaded with high-end luxury and technology.',
    },
    {
      IconName: '🛡️',
      FCTitle: 'Safety First',
      FCdescription: 'Advanced safety systems for complete peace of mind.',
    },
  ];

  return (
    <div className="features-container">
      <h1 className="features-title">Core Specifications of Our Car</h1>
      <div className="features-grid">
        {FeaturesCard.map((FeaturesCardList, index) => (
          <div className="features-card" key={index}>
            <div className="icon-box">{FeaturesCardList.IconName}</div>
            <h3 className="card-title">{FeaturesCardList.FCTitle}</h3>
            <p className="card-description">{FeaturesCardList.FCdescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
