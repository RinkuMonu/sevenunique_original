import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./static/js/component/Navbar/NavbarComponent";
// import Footer from "./static/js/component/Footer/footer";
import Home from "./static/js/Pages/Home/home";
import AboutUS from "./static/js/Pages/About/about";
import Services from "./static/js/Pages/Services/services";
import Teams from "./static/js/Pages/Team/Team";
import ContactUS from "./static/js/Pages/Contact/contact";
import PP from "./static/js/Pages/PrivacyPolicy/PP";
import TC from "./static/js/Pages/Terms&Conditions/TC";
import RP from "./static/js/Pages/RefundPolicy/RP";
// import AppHeader from './components/header';
// import AppHero from './components/hero';
// import AppAbout from './components/about';
// import AppServices from './components/services';
// import AppWorks from './components/works';
// import AppTeams from './components/teams';
// import AppTestimonials from './components/testimonials';
// import AppPricing from './components/pricing';
// import AppBlog from './components/blog';
// import AppContact from './components/contact';
import AppFooter from "../src/static/js/component/Footer/footer";
import B2c from "./static/js/Pages/B2C/B2c";
import MobileRechargePage from "./static/js/Pages/MobileRechargePage/MobileRechargePage";
import FlightBookingPage from "./static/js/Pages/FlightBookingPage/FlightBookingPage";
import BusBookingPage from "./static/js/Pages/BusBookingPage/BusBookingPage";
import DthRechargePage from "./static/js/Pages/DthRechargePage/DthRechargePage";
import TrainBookingPage from "./static/js/Pages/TrainBookingPage/TrainBookingPage";
import ElectricityBillPage from "./static/js/Pages/ElectricityBillPage/ElectricityBillPage";
import GasBillPage from "./static/js/Pages/GasBillPage/GasBillPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/B2c" element={<B2c />} />
        <Route path="/mobile-recharge" element={<MobileRechargePage />} />
        <Route path="/flight-booking" element={<FlightBookingPage />} />
        <Route path="/bus-booking" element={<BusBookingPage/>} />
        <Route path="/dth-recharge" element={<DthRechargePage/>} />
        <Route path="/train-booking" element={<TrainBookingPage />} />
        <Route path="/electricity-bill" element={<ElectricityBillPage/>} />
        <Route path="/gas-bill" element={<GasBillPage/>} />

        <Route path="/About" element={<AboutUS />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/ContactUs" element={<ContactUS />} />
        <Route path="/Privacy Policy" element={<PP />} />
        <Route path="/Terms And Conditions" element={<TC />} />
        <Route path="/Refund Policy" element={<RP />} />
        {/*
        {/* 
                    <Route path="/ContactUs" element={<ContactUS />} />
                    
                    <Route path="/TrainingPrograms" element={<TrainingPrograms />} />
                  
                    <Route path="/Careers" element={<Careers />} />
                    <Route path="/Industries" element={<Industries />} />
                    <Route path="/TP" element={<TP/>}/> */}{" "}
      </Routes>{" "}
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
