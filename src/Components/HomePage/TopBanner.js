import React from 'react';
import { useNavigate } from 'react-router-dom';
import topBannerBackground from '../../assets/images/bg.png'
import topBanner from '../../assets/images/top-bn-2.jpeg'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import TopCard from './TopCard';
const TopBanner = () => {
  const navigate = useNavigate();
  const infos = [
    {title: "Opening Hours", img: `${clock}`, footNote: "24 Hours.", id: 1},
    {title: "Visit Our Location", img: `${marker}`, footNote: "Mirpur Road, Dhaka-1207.",id: 2},
    {title: "Hot Line", img: `${phone}`, footNote: "+88012345", id: 3},
  ];
    return (
    <div style={{ background: `url(${topBannerBackground})`, backgroundSize: "cover",}}>
      <div className="card lg:card-side md:max-h-96">
        <div className="card-body mx-auto my-auto md:flex-1">
          <h2 className="card-title text-zinc-500 md:text-3xl">Experience the Magic of Functional Neurosurgeons</h2>
          <p>The mission of our <span className='font-bold text-zinc-500'>Functional Neurosurgeon</span> is to improve and restore the functionality of patients with non-structural diseases, which include Movement Disorders, Chronic Pain, Epilepsy and Seizures, Brain Tumor.</p>
          <div className="card-actions justify-center mt-3">
            <button onClick={()=>navigate('/appointment')} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50">Get Appointment</button>
          </div>
        </div>
        <figure className='m-2'><img className='rounded-xl' src={topBanner} alt="Album"/></figure>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8 mb-10 m-2">
          {infos.map((info) => (
            <TopCard key={info.id} info={info} />
          ))}
        </div>
    </div>
    );
};

export default TopBanner;