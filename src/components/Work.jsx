import React from "react";
import ProjectSlider from "./ProjectSlider";

import SaraPharma from "../assets/sarapharma.jpg";
// import SaraPharma2 from "../assets/realestate.jpg"; // replace with another screenshot if you have
import SaarahEats1 from "../assets/saaraheats1.jpg";
import SaarahEats2 from "../assets/saaraheats2.jpg"; // replace with another screenshot if you have
import SaarahEats3 from "../assets/saaraheats3.jpg"; // replace with another screenshot if you have
import SaarahEats4 from "../assets/saaraheats4.jpg"; // replace with another screenshot if you have
import SaarahEats5 from "../assets/saaraheats5.jpg"; // replace with another screenshot if you have
import SaarahEats6 from "../assets/saaraheats6.jpg"; // replace with another screenshot if you have
import SaarahEats7 from "../assets/saaraheats7.jpg"; // replace with another screenshot if you have
import SaarahEats8 from "../assets/saaraheats8.jpg"; // replace with another screenshot if you have

const Work = () => {
  return (
    <div name="work" className="min-h-screen bg-[#0a192f] text-gray-300 p-5">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Works
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-20">
          <ProjectSlider
            slides={[SaraPharma, SaraPharma]}
            title="ReactJS and NodeJS Application"
            demoLink="https://sarapharmaclient-production.up.railway.app/"
            codeLink="https://github.com/Saravanan-Muthukumar"
            description = "A full-stack CRUD application built with React, Node.js, and MySQL, featuring REST APIs and cloud deployment."
          />

          <ProjectSlider
            slides={[SaarahEats1, SaarahEats2, SaarahEats3, SaarahEats4, SaarahEats5, SaarahEats6, SaarahEats7, SaarahEats8]}
            title="Restaurant App (React + Node)"
            demoLink="https://restaurant-demo-frontend.vercel.app/"     // leave empty if you don't have link
            codeLink="https://github.com/Saravanan-Muthukumar"     // leave empty if you don't have link
            description="A responsive restaurant web application built with React, Tailwind CSS, MySQL and Node.js, focused on clean UI and scalable backend, deployed in Vercel and Digital Ocean."
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
