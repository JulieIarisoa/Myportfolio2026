import React from "react";

function Experience() {
  // Données centralisées pour les cartes d'expérience pour un code plus propre
  const experiences = [
    {
      title: "Web Development Mentor",
      company: "Coder dojo Fianarantsoa",
      description:
        "Teaching web development fundamentals (HTML5 and CSS3) to high school students, collaborating with Coder Dojo in FIANARANTSOA every Saturday from 8 to 10 AM.",
      date: "octobre 2023 - présent",
    },
    {
      title: "Communications Manager",
      company: "Coder dojo Fianarantsoa",
      description:
        "Managing the CoderDojo Fianarantsoa page by creating content and responding to all incoming messages, sharing important information with members whenever necessary.",
      date: "Novembre 2023 - présent",
    },
    {
      title: "Data Cleansing Agent",
      company: "Paositra Malagasy Fianarantsoa",
      description:
        "Entering, verifying, correcting, and recording client data for the 'Tsinjo Lavitra' accounts at Paositra Malagasy Fianarantsoa.",
      date: "Janvier 2023 - Mars 2023",
    },
    {
      title: "Software Developer Intern",
      company: "Direction Inter-régionale de la Paositra Malagasy (DRPM)",
      description:
        "Designing and developing an application for managing authorized advances within Paositra Malagasy.",
      date: "octobre 2024 - Novembre 2024",
    },
    {
      title: "Software Developer Intern",
      company: "Computer Store",
      description: "Designing and developing a web application for managing staff attendance and time-tracking within the store.",
      date: "octobre 2023 - Novembre 2023",
    },
    {
      title: "Data Entry Operator",
      company: "Centre Électoral National Indépendant (CENI)",
      description: "Entering voter data to update the national database prior to the election and recording official vote counts following the election.",
      date: "décembre 2022 - Février 2023",
    },
  ];

  return (
    <div className=" min-h-screen  font-sans">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-center mt-12 mb-12">
          Mes expériences
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className=" p-8 rounded-md shadow-md border-l-4 border-teal-600 flex flex-col relative"
            >
              <h2 className="text-xl font-bold text-teal-600 mb-1">
                {exp.title}
              </h2>
              <p className="text-sm font-medium text-teal-800 mb-4">
                {exp.company}
              </p>
              
              <div className="flex-grow">
                {exp.description && (
                  <p className=" text-sm leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;