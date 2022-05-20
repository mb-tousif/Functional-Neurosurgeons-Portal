import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const MyAppiontment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
   useEffect(() => {
     if(user){
        fetch(`http://localhost:4000/appointment?patient=${user.email}`, {
          method: 'GET',
          headers: {
            "content-type" : "application/json",
            "authorization" : `Token ${localStorage.getItem('accessToken')}`
          }
        })
          .then((res) => res.json())
          .then((data) => setAppointments(data));
     }
   }, [user])
  return (
    <div>
      This is Appointment Page! {appointments.length}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr class="hover">
                <th>{index+1}</th>
                <td>{a.patientName}</td>
                <td>{a.appointment}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppiontment;