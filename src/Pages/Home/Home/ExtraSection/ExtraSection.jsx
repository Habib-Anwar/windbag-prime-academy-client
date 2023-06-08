import { useEffect, useState } from 'react';
import './ExtraSection.css';

const ExtraSection = ({ letter }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newX = Math.floor(Math.random() * 1120);
      const newY = Math.floor(Math.random() * 350);
      setPosition({ x: newX, y: newY });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isHovered]);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="letter-container"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="moving-letter" style={{ left: position.x, top: position.y }}>
        
        <h3 className='text-orange-600'>Exclusive Discounts for Early Birds!! </h3>
        <img src="https://i.ibb.co/t2WL8tC/images.jpg" alt="" className='ml-20' />
        <button className='btn btn-info ml-28'>Enrole Now</button>
        {letter}
      </div>
    </div>
  );
};

export default ExtraSection;
