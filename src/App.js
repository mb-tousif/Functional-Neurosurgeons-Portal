import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AppointmentMain from './Components/AppointmentPage/AppointmentMain';
import Contact from './Components/ContactPage/Contact';
import HomeMain from './Components/HomePage/HomeMain';
import LogIn from './Components/LogInOut/LogIn';
import NotFoundPage from './Components/notFoundPage/NotFoundPage';
import Reviews from './Components/ReviewsPage/Reviews';
import Footer from './Components/SharedPages/Footer/Footer';
import Header from './Components/SharedPages/Header/Header';

function App() {
  return (
    <div className="text-zinc-500">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/appointment" element={<AppointmentMain />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
