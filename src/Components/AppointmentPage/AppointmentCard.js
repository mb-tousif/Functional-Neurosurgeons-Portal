import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentCard = ({ treatment }) => {
  const { name, slots} = treatment;
  const navigate = useNavigate();
  return (
    <div className="card shadow-xl hover:bg-base-200">
      <div className="card-body  text-center">
        <h2 className="card-title text-center">{name}!</h2>
        <select className="select w-full max-w-xs hover:bg-base-200">
          <option disabled selected className="text-center">
            Set your Appointment Time &#10003;
          </option>
          {slots.map((slot) => (
            <option>{slot}</option>
          ))}
        </select>
        <p>Total Available Appointment {slots.length}</p>
        <div className="card-actions justify-center mt-3">
          <button
            onClick={() => navigate("/appointment")}
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;