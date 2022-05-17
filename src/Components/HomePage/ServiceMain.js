import React from 'react';
import DBS from '../../assets/images/DBS.png';
import PD from '../../assets/images/parkinson.png';
import downBanner from "../../assets/images/treatment.png";
import Epilepsy from '../../assets/images/epilepsy.png';
import Service from './Service';
import { useNavigate } from 'react-router-dom';

const ServiceMain = () => {
    const navigate = useNavigate();
     const services = [
       {
         title: "Epilepsy and Seizures",
         img: `${Epilepsy}`,
         footNote:
           "Epilepsy is a common condition that affects the brain and causes frequent seizures. Seizures are bursts of electrical activity in the brain that temporarily affect how it works. They can cause a wide range of symptoms. Epilepsy can start at any age, but usually starts either in childhood or in people over 60.",
         id: 1,
       },
       {
         title: "Parkinson's Disease (PD)",
         img: `${PD}`,
         footNote:
           "Parkinson's disease is a brain disorder that causes unintended or uncontrollable movements, such as shaking, stiffness, and difficulty with balance and coordination. Symptoms usually begin gradually and worsen over time. As the disease progresses, people may have difficulty walking and talking.",
         id: 2,
       },
       {
         title: "Deep Brain Stimulation (DBS)",
         img: `${DBS}`,
         footNote:
           "Deep brain stimulation (DBS) is a surgery to implant a device that sends electrical signals to brain areas responsible for body movement. Electrodes are placed deep in the brain and are connected to a stimulator device. Similar to a heart pacemaker, a neurostimulator uses electric pulses to regulate brain activity.",
         id: 3,
       },
     ];
    return (
      <div>
        <div className="mt-10 mb-10">
          <h1 className="text-center md:text-3xl font-bold p-2 hover:text-slate-600 ">
            OUR SERVICES!
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3 p-2">
            {services.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </div>
        </div>
        <div className="card lg:card-side">
          <div className="card-body mx-auto my-auto md:flex-1">
            <h2 className="card-title text-zinc-500 md:text-3xl">Neurosurgery</h2>
            <p>
              Neurosurgery or neurological surgery, known in common parlance as
              brain surgery, is the medical specialty concerned with the
              prevention, diagnosis, surgical treatment, and rehabilitation of
              disorders which affect any portion of the nervous system including
              the brain, spinal cord, central and peripheral nervous system, and
              cerebrovascular system.
            </p>
            <div className="card-actions justify-center mt-3">
            <button onClick={()=>navigate('/appointment')} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50">Get Appointment</button>
            </div>
          </div>
          <figure className="p-2">
            <img className="rounded-3xl inline-block w-auto h-auto" src={downBanner} alt="Album" />
          </figure>
        </div>
      </div>
    );
};

export default ServiceMain;