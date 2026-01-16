import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { certifications } from "../constants";

const CompanyLogosSlider = () => {
  const companyLogos = [
    { id: 1, name: 'Microsoft', logo: '/logos/microsoft.png' },
    { id: 2, name: 'HP', logo: '/logos/hp.png' },
    { id: 3, name: 'UNICEF', logo: '/logos/unicef.png' },
    { id: 4, name: 'Google Developers', logo: '/logos/google-developers.png' },
    { id: 5, name: 'Un Women', logo: '/logos/un-women.png' },
    { id: 6, name: 'Open Learn', logo: '/logos/open.png' },
  ];

  return (
    <div className="py-8 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        freeMode={true}
        speed={1300}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="w-full"
      >
        {companyLogos.concat(companyLogos).map((company, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24 w-24">
              <img
                src={company.logo}
                alt={company.name}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const CertificationCard = ({ title, date, issuedBy, image, downloadTo }) => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = downloadTo;
    link.target = '_blank';
    link.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';
    
    // Append to the body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full lg:h-[420px] h-auto flex flex-col">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
        {/* Positioned download button overlay on the image */}
        <motion.button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 w-12 h-12 md:w-10 md:h-10 lg:w-9 lg:h-9 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Download document"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-5 md:w-5 lg:h-4 lg:w-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      </div>

      <div className="mt-5 flex-1 flex flex-col">
        <div>
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">Issued By: {issuedBy}</p>
          <p className="mt-2 text-secondary text-[14px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Map certification types to display names
  const typeToDisplayName = {
    'experience': 'Experience Letters',
    'workshop': 'Workshops & Bootcamps',
    'credential': 'Credentials',
    'social-impact': 'Social Impact & Awareness',
    'language': 'Language Learning',
    'recommendation': 'Letters of Recommendation',
  };

  // Map display names to certification types
  const displayNameToType = {
    'Experience Letters': 'experience',
    'Workshops & Bootcamps': 'workshop',
    'Credentials': 'credential',
    'Social Impact & Awareness': 'social-impact',
    'Language Learning': 'language',
    'Letters of Recommendation': 'recommendation',
  };

  // Group certifications by type
  const groupedCertifications = {
    all: certifications,
    experience: certifications.filter(cert => cert.type === "experience"),
    workshops: certifications.filter(cert => cert.type === "workshop"),
    credentials: certifications.filter(cert => cert.type === "credential"),
    socialImpact: certifications.filter(cert => cert.type === "social-impact"),
    language: certifications.filter(cert => cert.type === "language"),
    recommendation: certifications.filter(cert => cert.type === "recommendation")
  };

  const categories = ['All', 'Experience Letters', 'Workshops & Bootcamps', 'Credentials', 'Social Impact & Awareness', 'Language Learning', 'Letters of Recommendation'];

  const filteredCertifications = activeFilter === 'All'
    ? certifications
    : certifications.filter(cert => {
        const certType = displayNameToType[activeFilter];
        return cert.type === certType;
      });

  const totalCertifications = certifications.length;
  const filteredCount = filteredCertifications.length;

  const renderSection = (title, items, keyPrefix) => {
    if (items.length === 0) return null;
    
    return (
      <div className="mt-20">
        <div className="flex items-center mb-10">
          <div className="flex-grow border-t border-gray-700"></div>
          <h3 className="mx-4 text-white text-2xl font-semibold">{title}</h3>
          <div className="flex-grow border-t border-gray-700"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((cert, index) => (
            <CertificationCard
              key={`${keyPrefix}-${index}`}
              title={cert.title}
              date={cert.date}
              issuedBy={cert.issuedBy}
              image={cert.image}
              downloadTo={cert.downloadTo}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-transparent pt-[120px] pb-20">
      <div className="px-6 sm:px-16 max-w-7xl mx-auto">
        <div className="mt-5">
          <p className="text-secondary uppercase text-sm tracking-wider">Documents & Credentials</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">Credentials & Certifications</h2>
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4">
            A comprehensive collection of credentials, certifications, experience letters, workshops, and recommendation letters. Ideal for university admissions, scholarship applications, and professional opportunities.
          </p>
        </div>

        {/* Company Logos Slider */}
        <div className="mt-12">
          <CompanyLogosSlider />
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-tertiary text-secondary hover:text-white hover:bg-black-100 border border-purple-500/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Certification Count */}
        <div className="mt-4 text-secondary text-sm">
          Showing{" "}
          <span className="text-white font-semibold">{filteredCount}</span> of{" "}
          <span className="text-white font-semibold">{totalCertifications}</span>{" "}
          documents
          {activeFilter !== 'All' && (
            <> in <span className="capitalize">{activeFilter}</span></>
          )}
          .
        </div>

        {/* Filtered View */}
        {activeFilter === 'All' ? (
          <>
            {renderSection('Experience Letters', groupedCertifications.experience, 'experience')}
            {renderSection('Workshops & Bootcamps', groupedCertifications.workshops, 'workshops')}
            {renderSection('Credentials', groupedCertifications.credentials, 'credentials')}
            {renderSection('Social Impact & Awareness', groupedCertifications.socialImpact, 'social')}
            {renderSection('Language Learning', groupedCertifications.language, 'language')}
            {renderSection('Letters of Recommendation', groupedCertifications.recommendation, 'recommendation')}
          </>
        ) : (
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredCertifications.map((cert, index) => (
                <CertificationCard
                  key={`filtered-${index}`}
                  title={cert.title}
                  date={cert.date}
                  issuedBy={cert.issuedBy}
                  image={cert.image}
                  downloadTo={cert.downloadTo}
                />
              ))}
            </div>
            {filteredCertifications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-secondary text-lg">No documents found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;

