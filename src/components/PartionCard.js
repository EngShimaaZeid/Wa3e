import React from 'react';
import '../styles/PartionCard.css'; // Import the external CSS file
import TrueFocus from '../bits/TrueFocus';

const PartitionCard = ({ title, description, buttonText, image }) => {
  return (
    <div className="partitioned-card-container">
      <div className="partitioned-card-text w-full md:w-1/2 p-6">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">
          <TrueFocus 
            sentence="from Good to Perfect"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </p>
      </div>

      <div className="partitioned-card-image w-full md:w-1/2">
        <img src={image} alt="partition card" className="card-image" />
      </div>
    </div>
  );
};

export default PartitionCard;
