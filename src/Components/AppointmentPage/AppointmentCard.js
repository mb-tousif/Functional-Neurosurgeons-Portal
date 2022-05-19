import React from 'react';

const AppointmentCard = ({ treatment, setAppointments }) => {
  const { name, slots } = treatment;
  return (
    <div className="card shadow-xl hover:bg-base-200">
      <div className="card-body  text-center">
        <h2 className="card-title text-center">{name}!</h2>
        <p>
          {slots.length > 0
            ? `Total Available Appointment ${slots.length}`
            : <span className='text-red-700'>Appointment not Available</span>}
        </p>
        <div className="card-actions justify-center mt-3">
          <label onClick={() => setAppointments(treatment)}
            disabled={slots.length === 0} for="appointment" class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50 modal-button">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;