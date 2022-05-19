import banner from '../../assets/images/top-bn-2.jpeg'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import AppointmentBG from "../../assets/images/bg.png";
const AppointmentBanner = ({date, setDate}) => { 
    return (
        <div style={{ background: `url(${AppointmentBG})`, backgroundSize: 'cover' }}>
            <div className="hero">
                <div className="md:hero-content md:flex mx-auto">
                    <div className='md:w-1/2 mx-auto my-auto p-2'>
                     <DayPicker mode="single" selected={date} onDayClick={setDate}/>
                    </div>
                    <img src={banner} className="mx-auto my-auto mt-6 p-2 hidden md:block rounded-lg md:w-1/2 shadow-2xl" alt='TopBanner'/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;