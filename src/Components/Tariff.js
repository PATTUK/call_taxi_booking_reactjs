import React from 'react';
import './Tariff.css';

const Tariff = () => {

  const CarList = [
    {
      carImage:
        'https://th.bing.com/th?id=OIP.asBr7ZFfLqOGyCSazjuVbQHaFP&w=297&h=210&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      carType: 'Suzuki Swift',
      oneWay: 14,
      roundTrip: 13,
      rating: '★★★★★',
    },
    {
      carImage:
        'https://th.bing.com/th?id=OIP.2sLb4YmDVszjsjc2hrc46gHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      carType: 'ETIOS',
      oneWay: 14,
      roundTrip: 13,
      rating: '★★★★★',
    },
    {
      carImage:
        'https://th.bing.com/th/id/OIP.8oNwp-wufuVeitsjhhy6ggHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      carType: 'Volkswagen SUV',
      oneWay: 19,
      roundTrip: 17,
      rating: '★★★★★',
    },
    {
      carImage:
        'https://th.bing.com/th?id=OIP.O6z0FqwogB84w2CcbAMohQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
      carType: 'INNOVA',
      oneWay: 19,
      roundTrip: 18,
      rating: '★★★★★',
    },
    
  ];


  return (
    <div className="tariff-container" id='Tariff'>
      <div className="tariff-header">
        <h4>Lowest Price</h4>
        <h1>Our Outstation Tariff</h1>
      </div>
      <div className="tariff-grid">
        {CarList.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.carImage} alt={car.carType} className="car-image" />
            <h4>Car Brand: {car.carType}</h4>
            <p>One Way Trip: ₹{car.oneWay}/km</p>
            <p>Round Trip: ₹{car.roundTrip}/km</p>
            <span className="car-rating">Rating: {car.rating}</span>
            <br />
            <a href='#header' className='CarBtn'>Book Now</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tariff;
