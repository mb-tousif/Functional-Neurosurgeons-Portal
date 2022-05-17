import React from 'react';
import background from '../../assets/images/appointment.png'
const HomePageContact = () => {
    return (
        <div style={{background: `url(${background})`, backgroundSize:'cover'}}>
            <div className="p-2 rounded-lg">
                <div className="p-2 md:w-3/5 mx-auto my-auto ">
                    <div className="text-gray-50 flex-1 p-3 text-center">
                    <p className="text-primary text-xl">Contact Us!</p>
                    <p className="text-2xl font-medium">Stay Connected with Us!</p>
                </div>
                    <input type="text" placeholder="Type Name" className="w-full input input-bordered input-success m-2  block" />
                    <input type="email" placeholder="Type Email" className="input w-full input-bordered input-success m-2  block" />
                    <textarea className="textarea m-2 w-full  block textarea-success" placeholder="Your Comments"></textarea>
                    <div className="card-actions justify-center mt-3">
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-gray-50">Info Submitted</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageContact;