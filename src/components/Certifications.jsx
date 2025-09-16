import { certifications } from "../constants";

const CertificationCard = ({ index, title, date, issuedBy, image }) => {
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

  return (
    <section className="bg-transparent pt-[120px] pb-20">
      <div className="px-6 sm:px-16">
        <div className="mt-5">
          <p className="text-secondary uppercase text-sm tracking-wider">My Achievements</p>
          <h2 className="text-white text-3xl font-bold">Learning & Growth Journey</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            A collection of credentials, workshops, experiences, and letters that reflect my continuous journey of learning, growth, and making an impact across technology and society.
          </p>
        </div>

        {/* Experience Letters Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-gray-700"></div>
            <h3 className="mx-4 text-white text-2xl font-semibold">Experience Letters</h3>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {groupedCertifications.experience.map((cert, index) => (
              <CertificationCard
                key={`experience-${index}`}
                index={index}
                title={cert.title}
                date={cert.date}
                issuedBy={cert.issuedBy}
                image={cert.image}
              />
            ))}
          </div>
        </div>

        {/* Workshops & Bootcamps Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-gray-700"></div>
            <h3 className="mx-4 text-white text-2xl font-semibold">Workshops & Bootcamps</h3>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {groupedCertifications.workshops.map((cert, index) => (
              <CertificationCard
                key={`workshop-${index}`}
                index={index}
                title={cert.title}
                date={cert.date}
                issuedBy={cert.issuedBy}
                image={cert.image}
              />
            ))}
          </div>
        </div>

        {/* Credentials Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-gray-700"></div>
            <h3 className="mx-4 text-white text-2xl font-semibold">Credentials</h3>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {groupedCertifications.credentials.map((cert, index) => (
              <CertificationCard
                key={`credential-${index}`}
                index={index}
                title={cert.title}
                date={cert.date}
                issuedBy={cert.issuedBy}
                image={cert.image}
              />
            ))}
          </div>
        </div>

        {/* Social Impact & Awareness Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-gray-700"></div>
            <h3 className="mx-4 text-white text-2xl font-semibold">Social Impact & Awareness</h3>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {groupedCertifications.socialImpact.map((cert, index) => (
              <CertificationCard
                key={`social-${index}`}
                index={index}
                title={cert.title}
                date={cert.date}
                issuedBy={cert.issuedBy}
                image={cert.image}
              />
            ))}
          </div>
        </div>

        {/* Language Learning Section */}
        <div className="mt-20">
          <div className="flex items-center mb-10">
            <div className="flex-grow border-t border-gray-700"></div>
            <h3 className="mx-4 text-white text-2xl font-semibold">Language Learning</h3>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {groupedCertifications.language.map((cert, index) => (
              <CertificationCard
                key={`language-${index}`}
                index={index}
                title={cert.title}
                date={cert.date}
                issuedBy={cert.issuedBy}
                image={cert.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
