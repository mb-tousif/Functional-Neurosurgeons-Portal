import React from 'react';
import HomeAppointmentSection from './HomeAppointmentSection';
import HomePageContact from './HomePageContact';
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
        <HomePageContact/>
        </div>
    );
};

export default HomeMain;