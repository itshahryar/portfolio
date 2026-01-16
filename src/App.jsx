import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certifications, Education, Footer, Exp,Wrk,ProjectDetails, Chatbot, Services, Skills, QuickLinks } from "./components";
import ScrollToTop from './components/ScrollToTop';
import RouteLoader from './components/RouteLoader';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteLoader />
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
              <Wrk />
              <Education />
              <QuickLinks />
              <Contact />
              {/* <StarsCanvas /> */}
              <Footer />
              <Chatbot />
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
              <Chatbot />
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
              <Chatbot />
            </div>
          }
        />

        {/* Services Page */}
        <Route
          path="/services"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Services />
              <Footer />
              <Chatbot />
            </div>
          }
        />

        {/* Skills Page */}
        <Route
          path="/skills"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <Skills />
              <Footer />
              <Chatbot />
            </div>
          }
        />

        <Route
          path="/project/:id"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
              </div>
              <ProjectDetails />
              <Footer />
              <Chatbot />
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
              <Chatbot />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;