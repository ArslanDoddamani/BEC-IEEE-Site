import React, { useEffect } from "react";
import { TiArrowRight } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import VJ from "./assets/VJ.png";
import Sambhav from "./assets/Sambhav.png";
import SambhavBg from "./assets/Sambhav.jpg";

const ExecutiveTeam = () => {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".ExecutiveTeam", // Ensures it's targeting the correct section
        start: "top 80%", // Triggers when the section enters the viewport
        end: "top 20%", // Ends slightly before the section leaves
        scrub: true, // Smooth animation linked to scroll
      },
    });

    // Animate the "team" class elements
    t1.to(".anime1", {
      opacity: 1,
    });
    t1.to(".anime2", {
      opacity: 1,
    });
    t1.to(".anime3", {
      opacity: 1,
    });
    t1.to(".anime4", {
      opacity: 1,
    });
    t1.to(".anime5", {
      opacity: 1,
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) { // Check if width is greater than 1024px
        const t2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".ExecutiveTeam", // Ensures it's targeting the correct section
            start: "top -5%", // Triggers when the section enters the viewport
            end: "bottom -100%", // Ends slightly before the section leaves
            markers: true, // Only for debugging; remove in production
            scrub: true, // Smooth animation linked to scroll
            pin: true,  
          },
        });

        t2.fromTo(
          [".mem1", ".title1", ".img1", ".mem2", ".title2", ".img2", ".mem3", ".title3", ".img3", ".mem4", ".title4", ".img4", ".mem5", ".title5", ".img5",], // Select all mem elements
          {
            y: 500, // Start position
            opacity: 0, // Start with opacity 0
          },
          {
            y: 0, // Final position
            opacity: 1, // Fade to opacity 1
            stagger: 0.2, // Delay between each animation
            duration: 0.5, // Duration of each animation
            ease: "power2.out", // Smooth easing
          }
        );
      }
    };

    handleResize(); // Call on mount
    window.addEventListener('resize', handleResize); // Add resize event listener

    // Cleanup
    return () => {
      t1.kill(); // Kill timeline on component unmount
      window.removeEventListener('resize', handleResize); // Remove event listener on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Remove scroll triggers
    };
  }, []);

  return (
    <>
      <div className="ExecutiveTeam h-fit max-w-[90rem] lg:px-5 sm:px-8 px-5 mx-auto mt-10 pt-10">
        <div className="lg:h-[33vmin] h-fit flex items-center">
          <div className="xl:w-[55%] lg:w-[48%] w-full">
            <h1 className="anime1 opacity-0 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-bold">
              THE EXECUTIVE TEAM
            </h1>
            <h1 className="anime2 opacity-0 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin">
              YOU'VE BEEN
            </h1>
            <h1 className="anime3 opacity-0 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin">
              LOOKING FOR
            </h1>
          </div>
          <div className="xl:w-[45%] lg:w-[52%] hidden lg:block pl-20 text-justify">
            <p className="anime4 opacity-0 lg:text-sm">
              Our executive team is the backbone of our branch, leading with
              passion, innovation, and a relentless commitment to excellence.
              Each member plays a vital role in driving our vision forward,
              fostering a culture of collaboration and growth. Curious to know
              who’s behind the success stories and groundbreaking initiatives?
              Dive deeper and discover the brilliant minds shaping our journey!
            </p>
            <button className="anime5 opacity-0 group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5">
              MEET OUR EXECOM
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        <div className="execoms w-full h-[67vmin] hidden lg:flex justify-start items-end">

          <div className="mem1  xl:w-[20%] lg:w-[25%] h-full bg-[#F4A261] rounded-full flex flex-col justify-end items-center">
            <div className="mt-10 title1">
              <h1 className="text-center text-2xl font-bold text-black">
                Dr. Vijayalakshmi S. J
              </h1>
              <h1 className="text-center text-lg text-black">
                Branch Counselor
              </h1>
            </div>
            <img src={VJ} className="img1 rounded-b-full mt-5 w-80" alt="image" />
          </div>

          <div className="mem2 xl:w-[20%] lg:w-[25%] h-[85%] bg-[#CBD5D4] rounded-full flex flex-col justify-end items-center">
            <div className="mt-10 title2">
              <h1 className="text-center text-2xl font-bold text-black">
                Varsha meti
              </h1>
              <h1 className="text-center text-lg text-black">Chairperson</h1>
            </div>
            <img
              src={Sambhav}
              className="img2 rounded-b-full mt-10"
              alt="image"
            />
          </div>

          <div className="mem3 xl:w-[20%] lg:w-[25%] h-[75%] bg-[#E4DBD2] rounded-full flex flex-col justify-end items-center">
            <div className="mt-10 title3">
              <h1 className="text-center text-2xl font-bold text-black">
                Sanjana Dadamode
              </h1>
              <h1 className="text-center text-lg text-black">
                Vice Chairperson
              </h1>
            </div>
            <img
              src={Sambhav}
              className="img3 rounded-b-full mt-10"
              alt="image"
            />
          </div>

          <div className="mem4 xl:w-[20%] lg:w-[25%] h-[90%] bg-[#FFC931] rounded-full flex flex-col justify-end items-center">
            <div className="mt-10 title4">
              <h1 className="text-center text-2xl font-bold text-black">
                Sambhav Osawal
              </h1>
              <h1 className="text-center text-lg text-black">Secretary</h1>
            </div>
            <img
              src={Sambhav}
              className="img4 rounded-b-full mt-10"
              alt="image"
            />
          </div>

          <div className="mem5 xl:w-[20%] hidden h-[65%] bg-[#FEB9CE] rounded-full xl:flex flex-col justify-end items-center">
            <div className="mt-10 title5">
              <h1 className="text-center text-2xl font-bold text-black">
                Uday Magadum
              </h1>
              <h1 className="text-center text-lg text-black">Treasure</h1>
            </div>
            <img
              src={Sambhav}
              className="img5 rounded-b-full mt-10"
              alt="image"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-6 place-items-center mt-16">
          <div className="p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-center items-center">
            <img src={SambhavBg} alt="Team Member" className="w-24 h-24 mb-4" />
            <h2 className="text-lg font-semibold">Sambhav Osawal</h2>
            <p className="text-sm">Secretary</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 2
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 3
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 4
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 5
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 6
          </div>
        </div>

        <div className="lg:hidden w-full px-5 text-justify mt-10">
            <p className="anime4 opacity-0 lg:text-sm">
              Our executive team is the backbone of our branch, leading with
              passion, innovation, and a relentless commitment to excellence.
              Each member plays a vital role in driving our vision forward,
              fostering a culture of collaboration and growth. Curious to know
              who’s behind the success stories and groundbreaking initiatives?
              Dive deeper and discover the brilliant minds shaping our journey!
            </p>
            <button className="anime5 opacity-0 group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5">
              MEET OUR EXECOM
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>

      </div>
    </>
  );
};

export default ExecutiveTeam;
