import React from 'react';
import HomeAppointmentSection from './HomeAppointmentSection';
import HomeTestimonial from './HomeTestimonial';
import ServiceMain from './ServiceMain';
import TopBanner from './TopBanner';

const HomeMain = () => {
    return (
        <div className='p-2'>
        <TopBanner/>
        <ServiceMain/>
        <HomeAppointmentSection/>
        <HomeTestimonial/>
        </div>
    );
};

export default HomeMain;