import React from 'react';

const TopCard = ({info}) => {
    const {title, img, footNote} = info;
    return (
      <div className="card bg-primary bg-gradient-to-r from-secondary to-primary text-primary-content">
        <div className="card-body grid grid-cols-2">
          <img className="w-10 h-10" src={img} alt="img" />
          <div className="justify-start text-zinc-500">
            <h2 className="card-title">{title}</h2>
            <p>{footNote}</p>
          </div>
        </div>
      </div>
    );
};

export default TopCard;