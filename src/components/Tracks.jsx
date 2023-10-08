import React, { useState, useEffect } from 'react';
import TrackCard from './TrackCard'; // Assuming the TrackCard component file name is TrackCard.js
import Rover from "../imageForWebsite/rover.png"; 

const Tracks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen mb-8">
      <div className="relative inset-0 flex flex-col items-left justify-left">
        <img src={Rover} alt="Rover" style={{ width: "30%", height: "30%" }} />
        </div>
      <div
        className={`absolute ${
          isMobile
            ? 'top-[22%] right-[40%] w-1 h-1/4'
            : 'top-[15%] left-2/3 h-1/2 md:top-[13%] md:left-3/4 md:transform md:-translate-x-1/2 md:h-1/4 lg:left-[80%] lg:h-1/8 lg:top:[10%'
        } flex flex-col gap-0 md:gap-4 lg:gap-0`}
      >
        <TrackCard title="TRACK 01" icon="/images/scholar.png" positionRight={true} />
        <TrackCard title="TRACK 02" icon="/images/medical.png" positionRight={false} />
        <TrackCard title="TRACK 03" icon="/images/education.png" positionRight={true} />
        <TrackCard title="TRACK 04" icon="/images/currency.png" positionRight={false} />
      </div>
    </div>
  );
};

export default Tracks;
