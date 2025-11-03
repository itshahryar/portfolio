import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certifications, Education, Footer, Exp,Wrk } from "./components";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <Routes>
        {/* Main page routes */}
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Exp />
              <Tech />
              <Wrk />
              <Education />
              <Contact />
              {/* <StarsCanvas /> */}
              <Footer />
            </div>
          }
        />

        {/* Experience Page */}
        <Route
          path="/experience"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Experience />
              <Footer />
            </div>
          }
        />

        {/* Works Page */}
        <Route
          path="/projects"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Works />
              <Footer />
            </div>
          }
        />

        {/* Certifications Page */}
        <Route
          path="/certifications"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Certifications />
              <Footer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;