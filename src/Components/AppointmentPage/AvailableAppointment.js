import { format } from 'date-fns';
import React, { useState } from 'react';
import "react-day-picker/dist/style.css";
import UseTreatment from '../../Hooks/UseTreatment';
import AppointmentCard from './AppointmentCard';
import BookAppointment from "./BookAppointment";
const AvailableAppointment = ({date}) => {
  const [treatments] = UseTreatment();
  // console.log(treatments);
  const [appointments, setAppointments] = useState(null)
    return (
      <div>
        <p className="text-primary font-bold text-center mt-6 mb-10">
          Your appointment on {format(date, "PP")}.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:m-2 mb-10 mt-4">
          {treatments.map((treatment) => (
            <AppointmentCard
              key={treatment._id}
              treatment={treatment}
              setAppointments={setAppointments}
            />
          ))}
        </div>
        {appointments && (
          <BookAppointment date={date} appointments={appointments} setAppointments={setAppointments}/>
        )}
        {/* <BookAppointment appointments={appointments}/> */}
      </div>
    );
};

export default AvailableAppointment;