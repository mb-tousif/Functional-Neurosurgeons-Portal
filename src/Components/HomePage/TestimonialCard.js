import React from 'react';

const TestimonialCard = ({testimonial}) => {
    const { img, footNote, comment, address } = testimonial;
  return (
    <div className="p-2 mx-auto my-auto">
      <h1>{comment}</h1>
      <div className="flex mt-4 mx-auto my-auto">
        <div class="avatar">
          <div class="w-20 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="images" />
          </div>
          <div className="ml-6">
            <p>{footNote}</p>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;