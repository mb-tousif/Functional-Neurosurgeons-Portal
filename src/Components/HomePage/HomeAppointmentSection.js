import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor-small.png';

const HomeAppointmentSection = () => {
    const navigate = useNavigate();
    return (
      <section
        style={{ background: `url(${background})`, backgroundSize: "cover" }}
        className="mt-10 rounded-xl"
      >
        <div className="flex justify-center items-center">
          <div className="flex-1 hidden md:block">
            <img className="mt-[-200]" src={doctor} alt="doctor" />
          </div>
          <div className="text-gray-50 flex-1 p-3">
            <p className="text-primary">Appointment</p>
            <p className="text-xl font-medium">Make an Appointment Today!</p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus,
              doloribus rem pariatur tenetur ad consectetur reiciendis
              recusandae animi sit voluptatibus reprehenderit officia aspernatur
              voluptates ut vitae nobis autem aliquid dolorem beatae? Eaque
              dicta neque sed nihil asperiores reprehenderit sunt adipisci
              deserunt labore sit rem molestiae ab, deleniti exercitationem aut
              qui!
            </p>
            <div className="card-actions justify-center mt-3">
              <button
                onClick={() => navigate("/appointment")}
                className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50"
              >
                Get Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeAppointmentSection;