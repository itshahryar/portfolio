import { useState } from 'react';
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

const CertificationCard = ({ title, date, issuedBy, image }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full lg:h-[420px] h-auto flex flex-col">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5 flex-1 flex flex-col justify-between">
        <h3 className="text-white font-bold text-[24px]">{title}</h3>
        <p className="mt-2 text-secondary text-[14px]">Issued By: {issuedBy}</p>
        <p className="mt-2 text-secondary text-[14px]">{date}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  // Group certifications by category
  const groupedCertifications = {
    credentials: certifications.filter(cert =>
      cert.title.includes("Microsoft Specialist") ||
      cert.title.includes("HP LIFE") ||
      cert.title.includes("Resume Writing")
    ),
    experience: certifications.filter(cert =>
      cert.title.includes("Internship") ||
      cert.title.includes("Experience") ||
      cert.title.includes("Developer")
    ),
    workshops: certifications.filter(cert =>
      cert.title.includes("Workshop") ||
      cert.title.includes("Bootcamp")
    ),
    socialImpact: certifications.filter(cert =>
      cert.issuedBy.includes("UN") ||
      cert.issuedBy.includes("UNICEF") ||
      cert.title.includes("Gender") ||
      cert.title.includes("Child Protection")
    ),
    language: certifications.filter(cert =>
      cert.title.includes("Chinese") ||
      cert.title.includes("Language")
    )
  };

  const renderSection = (title, items, keyPrefix) => (
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
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-transparent pt-[120px] pb-20">
      <div className="px-6 sm:px-16">
        <div className="mt-5">
          <p className="text-secondary uppercase text-sm tracking-wider">My Achievements</p>
          <h2 className="text-white text-3xl font-bold">Learning & Growth Journey</h2>
          <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4">
            A collection of credentials, workshops, experiences, and letters that reflect my continuous journey of learning, growth, and making an impact across technology and society.
          </p>
        </div>

        {/* Company Logos Slider */}
        <div className="mt-12">
          <CompanyLogosSlider />
        </div>

        {/* All Sections */}
        {renderSection('Experience Letters', groupedCertifications.experience, 'experience')}
        {renderSection('Workshops & Bootcamps', groupedCertifications.workshops, 'workshops')}
        {renderSection('Credentials', groupedCertifications.credentials, 'credentials')}
        {renderSection('Social Impact & Awareness', groupedCertifications.socialImpact, 'social')}
        {renderSection('Language Learning', groupedCertifications.language, 'language')}
      </div>
    </section>
  );
};

export default Certifications;

