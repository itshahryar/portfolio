import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certifications, Education, Footer } from "./components";
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
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <Contact />
              {/* <StarsCanvas /> */}
              <Footer /> {/* Add Footer here */}
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
              <Footer /> {/* Add Footer here */}
            </div>
          }
        />

        {/* Education Page */}
        <Route
          path="/education"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Education />
              <Footer /> {/* Add Footer here */}
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;