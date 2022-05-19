import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';

const BookAppointment = ({appointments, date, setAppointments}) => {
    const {_id, name, slots } = appointments;
    // console.log(appointments);
    const formatedDate = format(date, 'PP')
    const [user, loading, error] = useAuthState(auth);
    const handleAppointment=(e)=>{
      e.preventDefault();
      const slot = e.target.slot.value;
      // console.log(user, slot);
      const appointment = {
        appointmentId: _id,
        appointment: name,
        date: formatedDate,
        slot,
        patient: user.email,
        patientName: user.displayName,
        phone: e.target.phone.value
      };
      // console.log(appointment.date, appointment.appointment, appointment.slot);


      fetch("http://localhost:4000/appointment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(appointment),
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.success) {
          toast.success(
            `Appointment Requested on ${formatedDate} and ${slot}!`
          );
         
        } else {
           toast.error(`You already have an Appointment!`);
        }
      })
      setAppointments(null)
    }
  return (
    <div>
      <input type="checkbox" id="appointment" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative mx-auto">
          <label htmlFor="appointment" className="btn btn-accent btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-xl mb-8">Book your {name} appointment Time!</h3>
          <form onSubmit={handleAppointment}>
          <input type="text" value={format(date, "PP")} disabled className="input font-bold mx-auto m-2 w-full max-w-xs" />
          <select name='slot' className="select w-full max-w-xs hover:bg-base-200">
            <option disabled selected className="text-center">Set your Appointment Time &#10003;</option>
          {
            slots.map((slot, index) => (<option value={slot} key={index}>{slot}</option>))
          }
          </select>
          <input type="text" name='name' disabled value={user?.displayName || " "} className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" />
          <input name='email' type="email" disabled value={user?.email || ""} className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" />
          <input type="tel" name='phone' placeholder="Phone Number" className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" />
          <label htmlFor="appointment"><input type="submit" value="Submit" className="input mx-auto btn-accent m-2 w-full max-w-xs" /></label>
          {/* <div className="modal-action"><label htmlFor="appointment" className="btn w-full max-w-xs mx-auto btn-secondary">Booked</label></div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;