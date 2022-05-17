import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import "react-day-picker/dist/style.css";
import AppointmentCard from './AppointmentCard';
const AvailableAppointment = ({date}) => {
    const [treatments, setTreatments]=useState([])
    useEffect(()=>{
        const url = "http://localhost:4000/treatments";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTreatments(data))
    },[])
    return (
      <div>
        <p className="text-primary font-bold text-center mt-6 mb-10">
          Your appointment on {format(date, "PP")}.
        </p>
        <div className="grid md:grid-cols-3 gap-4 md:m-2 mb-10 mt-4">
          {treatments.map((treatment) => (
            <AppointmentCard key={treatment._id} treatment={treatment} />
          ))}
        </div>
      </div>
    );
};

export default AvailableAppointment;