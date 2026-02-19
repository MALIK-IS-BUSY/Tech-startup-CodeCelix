import React from "react";

const CaseStudies = () => {
  const projects = [
    {
      title: "AI Chatbot for E-commerce",
      desc: "Built an intelligent chatbot that increased customer support efficiency by 60%.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
    },
    {
      title: "Business Automation System",
      desc: "Automated manual workflows and saved 40% operational time.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    },
    {
      title: "Mobile App Development",
      desc: "Created a high-performance mobile app with modern UI.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#dda0dd] to-[#7C3AED] text-white min-h-screen">


      {/* Hero Section */}
      <section className="text-center py-20">

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case Studies
        </h1>

        <p className="text-white">
          Explore our successful projects and solutions.
        </p>

      </section>



      {/* Projects Section */}
      <section className="px-6 md:px-20 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-blue-600 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
            >

              {/* Image */}
              <img
                src={project.image}
                alt=""
                className="h-48 w-full object-cover"
              />


              {/* Content */}
              <div className="p-6">

                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>

                <p className="text-white mb-4">
                  {project.desc}
                </p>

                <button className="text-white hover:underline">
                  View Details →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* CTA Section */}
      <section className="text-center pb-20">

        <h2 className="text-3xl font-bold mb-4">
          Have a Project in Mind?
        </h2>

        <button className="bg-gradient-to-r from-[#78184a] to-[#7C3AED] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
          Start Your Project
        </button>

      </section>



    </div>
  );
};

export default CaseStudies;
