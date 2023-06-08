import { useEffect, useState } from 'react';
import './ExtraSection.css';

const ExtraSection = ({ letter }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const newX = Math.floor(Math.random() * 1120);
      const newY = Math.floor(Math.random() * 350);
      setPosition({ x: newX, y: newY });
    }, 1000); // Update position every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="letter-container border-4">
      <div className="moving-letter" style={{ left: position.x, top: position.y }}>
        
        <h3>Exclusive Discounts for Early Birds!! </h3>
        <img src="https://i.ibb.co/t2WL8tC/images.jpg" alt="" />
        <button className='btn btn-info'>Enrole Now</button>
        {letter}
      </div>
    </div>
  );
};

export default ExtraSection;
