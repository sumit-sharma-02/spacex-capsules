import React, { useEffect, useState } from "react";
import BgShape from "../images/hero/hero-bg.png";
import HeroRocket from "../images/hero/falcon.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [scrollUp, setScrollUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section className="w-full h-[97vh] bg-[#f8f8f8] relative">
        <div className="3xl:relative !max-w-[133rem] !mx-auto !my-0 !px-[2.5rem] !py-0">
          <img
            className="max-md:hidden absolute top-0 right-0 z-[1]"
            src={BgShape}
            alt="bg-shape"
          />
          <div className="w-full h-screen flex items-center max-md:justify-center relative">
            <div className="flex flex-col max-w-[40rem] mt-[5rem] max-md:text-center z-[3] max-md:items-center">
              <h4 className="text-[1.75rem] font-Rubik text-black font-medium">
                Future is here with SpaceX
              </h4>
              <h1
                className="text-[4.2rem] sm:text-[5.2rem] font-Poppins font-bold leading-[1.2] mt-4 mb-[2.3rem]
                text-black"
              >
                Making <span className="text-[#da2128]">Humanity</span>{" "}
                Multiplanetary
              </h1>
              <p
                className="text-[1.6rem] font-Rubik leading-[1.6] text-[#706f7b] mb-16 max-sm:px-2.5
              max-sm:py-0 max-sm:text-[1.3rem]"
              >
                Building on the achievements of Falcon 9 and Falcon Heavy,
                SpaceX is working on a next generation of fully reusable launch
                vehicles that will be the most powerful ever built, capable of
                carrying humans to Mars and other destinations in the solar
                system.
              </p>
              <div className="flex gap-8 text-[1.6rem] font-Rubik max-sm:flex-col">
                <Link
                  onClick={bookBtn}
                  className="no-underline text-white font-bold bg-[#da2128] py-[1.8rem] px-32
                    rounded-[0.3rem] shadow-[0 10px 15px 0 rgba(255, 83, 48, 0.35)] transition-all
                    delay-100 border-2 border-solid border-[#da2128] xs:px-12 hover:bg-[#b91d22]
                    hover:shadow-[0 10px 15px 0 rgba(255, 83, 48, 0.6)]"
                  to="/"
                >
                  Search Now &nbsp; <i className="fa-solid fa-circle-down"></i>
                </Link>{" "}
                <Link
                  className="bg-[#010103] px-12 py-[1.8rem] rounded-[0.3rem] border-2 text-white    
                  border-solid border-[#010103] transition-all delay-100 hover:bg-transparent
                  hover:text-[#010103]"
                  to="/"
                >
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroRocket}
              alt="rocket-img"
              className="absolute right-0 w-[65%] z-[2] mt-5rem max-md:hidden"
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={`fixed text-[2.5rem] text-white bg-[#da2128] border-[3px] border-solid
            border-white rounded-[5px] w-8 h-8 bottom-20 right-20 z-20 items-center text-center 
            justify-center p-8 cursor-pointer ${scrollUp ? "flex" : "hidden"}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
};

export default Hero;
