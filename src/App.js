import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AppointmentMain from './Components/AppointmentPage/AppointmentMain';
import Contact from './Components/ContactPage/Contact';
import HomeMain from './Components/HomePage/HomeMain';
import LogIn from './Components/LogInOut/LogIn';
import Register from './Components/LogInOut/Register';
import NotFoundPage from './Components/notFoundPage/NotFoundPage';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Reviews from './Components/ReviewsPage/Reviews';
import Header from './Components/SharedPages/Header/Header';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoardMain from './Components/DashBoard/DashBoardMain';
import MyAppiontment from './Components/DashBoard/MyAppiontment';
import MyReview from './Components/DashBoard/MyReview';
function App() {
  return (
    <div className="text-zinc-500 max-w-7xl mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/appointment" element={<RequireAuth>
          <AppointmentMain />
        </RequireAuth>} />
        <Route path="/dashboard" element={<RequireAuth>
          <DashBoardMain/>
        </RequireAuth>}>
          <Route index element={<MyAppiontment/>} />
          <Route path="myReview" element={<MyReview/>}/>
        </Route>
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signIn" element={<Register />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
