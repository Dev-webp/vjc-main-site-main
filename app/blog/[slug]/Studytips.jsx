import React, { useEffect, useState } from "react";
import Link from "next/link";

const StudentVisaProcess = () => {
  const countries = [
    { name: "USA", path: "/usa" },
    { name: "UK", path: "/uk" },
    { name: "Canada", path: "/canada" },
    { name: "Australia", path: "/australia" },
    { name: "Germany", path: "/studyingermany" },
    { name: "Italy", path: "/italy" },
    { name: "France", path: "/france" },
    { name: "Singapore", path: "/singapore" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "South Africa", path: "/south-africa" },
    { name: "New Zealand", path: "/newzealand" },
    { name: "Philippines", path: "/philippines" },
    { name: "Poland", path: "/poland" },
    { name: "Ireland", path: "/ireland" },
    { name: "Spain", path: "/spain" },
    { name: "Netherlands", path: "/netherlands" },
    { name: "Switzerland", path: "/switzerland" },
    { name: "Denmark", path: "/denmark" },
    { name: "Dubai", path: "/dubai" },
    { name: "Luxembourg", path: "/luxembourg" },
    { name: "Hongkong", path: "/hongkong" },
    { name: "UAE", path: "/uae" },
    { name: "Norway", path: "/norway" },
    { name: "Sweden", path: "/sweden" },
  ];

  // Counts state
  const [studentsPlaced, setStudentsPlaced] = useState(1);
  const [countriesCount, setCountriesCount] = useState(1);
  const [universitiesCount, setUniversitiesCount] = useState(1);

  // Max values for counters
  const maxStudents = 12500;
  const maxCountries = countries.length; // 25
  const maxUniversities = 150;

  useEffect(() => {
    let studentCounter = 1;
    let countryCounter = 1;
    let universityCounter = 1;

    // Intervals for animation speed
    const studentInterval = setInterval(() => {
      studentCounter += 50;
      setStudentsPlaced(studentCounter > maxStudents ? maxStudents : studentCounter);
      if (studentCounter >= maxStudents) clearInterval(studentInterval);
    }, 20);

    const countryInterval = setInterval(() => {
      countryCounter += 1;
      setCountriesCount(countryCounter > maxCountries ? maxCountries : countryCounter);
      if (countryCounter >= maxCountries) clearInterval(countryInterval);
    }, 100);

    const universityInterval = setInterval(() => {
      universityCounter += 2;
      setUniversitiesCount(universityCounter > maxUniversities ? maxUniversities : universityCounter);
      if (universityCounter >= maxUniversities) clearInterval(universityInterval);
    }, 30);

    return () => {
      clearInterval(studentInterval);
      clearInterval(countryInterval);
      clearInterval(universityInterval);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Student Visa Process with <span className="text-orange-500"> VJC Overseas </span> 
      </h1>

      {/* Country Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center mb-10">
        {countries.map((c, i) => (
          <Link key={i} href={c.path}>
            <div className="px-4 py-3 border border-blue-500 rounded-xl text-center text-blue-400 hover:bg-orange-500 hover:text-white transition font-semibold shadow-md text-sm sm:text-base cursor-pointer">
              {c.name} Student Visa
            </div>
          </Link>
        ))}
      </div>

      {/* Content Paragraphs */}
      <div className="max-w-3xl mx-auto space-y-6 text-justify text-gray-700">
        <p>
          Navigating the student visa process can seem overwhelming, but with VJC Overseas by your side, it becomes a straightforward and manageable journey. We provide expert guidance from start to finish, ensuring all your documents, applications, and requirements are handled accurately and efficiently.
        </p>
        <p>
          Our dedicated counsellors stay updated with the latest immigration policies and visa regulations for popular study destinations like the USA, Canada, UK, Australia, Germany, and more. This means you receive reliable advice tailored to your specific country of interest.
        </p>
        <p>
          From helping you select the right course and university to assisting with the visa interview preparation, we offer comprehensive support that maximizes your chances of visa approval. We also provide post-visa services such as pre-departure briefings and assistance with accommodation and travel arrangements.
        </p>
        <p>
          Studying abroad opens a world of opportunities, and VJC Overseas is committed to making your dream come true. Our transparent, step-by-step approach and personalized care ensure that your student visa process is smooth, stress-free, and successful.
        </p>
        <p>
          In recent times, the student visa landscape has seen major shifts. Many countries have implemented more digitized systems for visa applications, and several are now fast-tracking student permits to boost their international education sectors post-COVID. This opens up quicker, more efficient routes for students who meet the right criteria.
        </p>
        <p>
          Additionally, emerging destinations like Germany, Ireland, and Sweden have become increasingly popular due to low tuition fees, extended post-study work visas, and growing job markets. VJC Overseas stays ahead of these trends, ensuring our students take full advantage of the latest opportunities available globally.
        </p>
      </div>

      {/* Autoplay Video */}
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl max-w-5xl mx-auto mt-8">
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/cLNpEry1oPQ?autoplay=1&mute=1&loop=1&playlist=cLNpEry1oPQ&controls=0&showinfo=0&rel=0"
          title="VJC Overseas Student Visa Process"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* CTA Counters */}
      <div className="mt-8 bg-orange-500 rounded-xl shadow-lg p-8 max-w-4xl mx-auto flex flex-col sm:flex-row justify-around text-center gap-8">
        <div>
          <h2 className="text-5xl font-bold text-white">{studentsPlaced.toLocaleString()}+</h2>
          <p className="mt-2 text-gray-700 font-semibold">Students Placed</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-white">{countriesCount}</h2>
          <p className="mt-2 text-gray-700 font-semibold">Countries Covered</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold text-white">{universitiesCount}+</h2>
          <p className="mt-2 text-gray-700 font-semibold">Universities Partnered</p>
        </div>
      </div>
    </div>
  );
};

export default StudentVisaProcess;
