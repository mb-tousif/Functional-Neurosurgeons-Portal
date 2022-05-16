import React from 'react';
import quote from '../../assets/icons/quote.svg'
import Jhon from "../../assets/images/people1.png";
import Jakir from "../../assets/images/people2.png";
import Kabila from "../../assets/images/people3.png";
import TestimonialCard from './TestimonialCard';
const HomeTestimonial = () => {
    const testimonials = [
      {
        comment: "I feel It's Like a home Of me!",
        img: `${Jhon}`,
        footNote: "Kabila",
        id: 1,
        address: "Dhaka-1206, Bangladesh",
      },
      {
        comment: "Transforming humans for a happy and healthy life!",
        img: `${Jakir}`,
        footNote: "Nabila",
        id: 2,
        address: "Cumilla-1106, Bangladesh",
      },
      {
        comment: "Focused on discovering Neuroscience for our betterment!",
        img: `${Kabila}`,
        footNote: "Rokeya",
        id: 3,
        address: "Rajshahi-1306, Bangladesh",
      },
    ];
    return (
      <div className="mt-10 mb-10">
        <div className="flex justify-between">
          <div className="ml-4">
            <p className="text-primary">Appointment</p>
            <p className="text-xl font-medium">What Our Patients Say!</p>
          </div>
          <div className="mr-4">
            <img src={quote} alt="icon" className="h-20" />
          </div>
        </div>
        <div className="md:grid grid-cols-3 gap-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
};

export default HomeTestimonial;