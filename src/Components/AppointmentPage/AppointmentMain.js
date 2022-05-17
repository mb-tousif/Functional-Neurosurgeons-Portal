import React, { useState } from "react";
import Footer from "../SharedPages/Footer/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";

const AppointmentMain = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date}/>
      <Footer />
    </div>
  );
};

export default AppointmentMain;
