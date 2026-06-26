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
            <div className="flex justify-center items-center h-24 w-24 opacity-40 hover:opacity-80 transition-opacity duration-300">
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

const Tooltip = ({ title, isVisible }) => {
  return (
    <motion.div 
      className="absolute bottom-full right-0 mb-2 bg-[#1d1836]/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg shadow-lg z-10 pointer-events-none border border-white/[0.08]"
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }} 
      transition={{ duration: 0.2 }} 
    >
      <div className="flex items-center gap-2 whitespace-nowrap">
        <div className="text-sm font-medium">Download</div>
        <div className="w-1 h-1 bg-white/60 rounded-full"></div>
        <div className="text-sm text-white/90 max-w-[150px] truncate">{title}</div>
      </div>
      <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-[#1d1836]/95 border-r border-b border-white/[0.08] transform rotate-45"></div>
    </motion.div>
  );
};

const CertificationCard = ({ title, date, issuedBy, image, downloadTo }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadTo;
    link.target = '_blank';
    link.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group bg-gradient-to-br from-[#1d1836] to-black/40 rounded-2xl w-full h-full text-left shadow-lg transition-all duration-500 backdrop-blur-sm border border-white/[0.06] hover:ring-1 hover:ring-purple-500/25 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full h-[230px] bg-[#12101f] overflow-hidden flex items-center justify-center p-3">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1836] via-transparent to-transparent pointer-events-none" />
        
        {/* Download Button */}
        <div 
          className="absolute bottom-3 right-3 z-10"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Tooltip title={title} isVisible={isHovering} />
          <motion.button
            onClick={handleDownload}
            className="w-9 h-9 bg-purple-600/80 hover:bg-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download document"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-white"
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
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-white text-[16px] font-semibold leading-tight flex-1">
          {title}
        </h3>

        {/* Divider */}
        <div className="border-t border-white/5 mt-3 mb-2.5" />

        {/* Meta Info */}
        <div className="space-y-1">
          <p className="text-[12px] flex items-center gap-2 text-gray-400">
            <svg className="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            {issuedBy}
          </p>
          <p className="text-[12px] flex items-center gap-2 text-gray-400">
            <svg className="w-3 h-3 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const displayNameToType = {
    'Experience Letters': 'experience',
    'Workshops & Bootcamps': 'workshop',
    'Credentials': 'credential',
    'Social Impact & Awareness': 'social-impact',
    'Language Learning': 'language',
    'Letters of Recommendation': 'recommendation',
  };

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
          <div className="flex-grow border-t border-white/10"></div>
          <h3 className="mx-4 text-white text-2xl font-semibold whitespace-nowrap">{title}</h3>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <p className="text-gray-400 uppercase text-sm tracking-wider">Documents & Credentials</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">Credentials & Certifications</h2>
          <p className="text-gray-400 text-[17px] max-w-3xl leading-[30px] mt-4">
            A curated collection of experience letters, certifications, workshops,
            and recommendations to support academic and professional applications.
          </p>
        </div>

        {/* Company Logos Slider */}
        <div className="mt-12">
          <CompanyLogosSlider />
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-colors duration-200 ${
                activeFilter === category
                  ? 'bg-purple-600/80 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.06] hover:border-white/10'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Certification Count */}
        <div className="mt-4 text-gray-400 text-sm">
          Showing{" "}
          <span className="text-white font-semibold">{filteredCount}</span> of{" "}
          <span className="text-white font-semibold">{totalCertifications}</span>{" "}
          documents
          {activeFilter !== 'All' && (
            <> in <span className="capitalize text-white/80">{activeFilter}</span></>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No documents found in this category.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
