import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SelfAssesment from "./pages/SelfAssesment/SelfAssesment";
import WhyCISAssist from "./pages/WhyCISAssist/WhyCISAssist";
import FAQ from "./pages/FAQ/FAQ";
import MakeAclaim from "./pages/MakeAclaim/MakeAclaim";
import ReferAfriend from "./pages/ReferAfriend/ReferAfriend";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import "./App.css"


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Toaster />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/why-cisassist" element={<WhyCISAssist/>} />
            {/* <Route path="/self-assesment" element={<SelfAssesment/>} /> */}
            <Route path="/refer-a-friend" element={<ReferAfriend/>} />
            <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
            {/* <Route path="/make-a-claim" element={<MakeAclaim/>} />
            <Route path="/faqs" element={<FAQ/>} /> */}
          
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App