import React from 'react';

const Service = ({ service }) => {
    const { title, img, footNote } = service;
  return (
    <div className="card bg-gray-400 text-gray-50 shadow-xl">
        <figure><img src={img} alt="images" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{footNote}</p>
        </div>
    </div>
  )
};

export default Service;