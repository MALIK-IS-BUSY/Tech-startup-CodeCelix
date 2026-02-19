import React from "react";

const Services = () => {
  const services = [
    {
      title: "AI Solutions",
      desc: "We build smart AI tools to automate your business processes.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      desc: "Modern, responsive, and high-performance websites.",
      icon: "🌐",
    },
    {
      title: "App Development",
      desc: "Android & iOS apps with modern UI and fast performance.",
      icon: "📱",
    },
    {
      title: "Automation",
      desc: "Automate repetitive tasks and improve efficiency.",
      icon: "⚙️",
    },
    {
      title: "Cloud Services",
      desc: "Secure and scalable cloud infrastructure solutions.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful and user-friendly interface designs.",
      icon: "🎨",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#dda0dd] to-[#7C3AED] text-white min-h-screen">


      {/* Hero Section */}
      <section className="text-center py-20">

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Our Services
        </h1>

        <p className="text-white max-w-xl mx-auto">
          We provide innovative technology solutions to grow your business.
        </p>

      </section>



      {/* Services Cards */}
      <section className="px-6 md:px-20 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-blue-600 p-8 rounded-xl hover:scale-105  transition duration-300 cursor-pointer"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h2 className="text-xl font-semibold mb-2">
                {service.title}
              </h2>

              <p className="text-white hover:text-white">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* CTA Section */}
      <section className="text-center pb-20">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>

        <button className="bg-[#6366F1] px-8 py-3 rounded-lg hover:bg-[#4F46E5] transition">
          Contact Us
        </button>

      </section>



    </div>
  );
};

export default Services;
