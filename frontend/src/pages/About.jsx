import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#dda0dd] to-[#7C3AED] text-white">

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our Company
        </h1>
        <p className="text-white max-w-2xl mx-auto">
          We provide cutting-edge AI and Automation solutions to help businesses
          grow faster, smarter, and more efficiently.
        </p>
      </section>


      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
          alt="team"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

          <p className="text-white mb-4">
            Our mission is to empower businesses with innovative technology
            solutions that automate processes and increase productivity.
          </p>

          <p className="text-white">
            We believe in innovation, trust, and delivering high-quality
            digital solutions.
          </p>
        </div>

      </section>


      {/* Team Section */}
      <section className="py-16 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-blue-600 p-6 rounded-xl hover:scale-105 transition">

            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h3 className="text-xl font-semibold">
              Ali Khan
            </h3>

            <p className="text-white">
              CEO & Founder
            </p>

          </div>


          {/* Card 2 */}
          <div className="bg-blue-600 p-6 rounded-xl hover:scale-105 transition">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h3 className="text-xl font-semibold">
              Sara Ahmed
            </h3>

            <p className="text-white">
              AI Engineer
            </p>

          </div>


          {/* Card 3 */}
          <div className="bg-blue-600 p-6 rounded-xl hover:scale-105 transition">

            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />

            <h3 className="text-xl font-semibold">
              Hassan Raza
            </h3>

            <p className="text-white">
              Developer
            </p>

          </div>

        </div>

      </section>
    </div>
  );
};

export default About;
