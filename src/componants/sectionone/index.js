import React from "react";
import Image from "next/image";
function Sectioone() {
  return (
    <div className="h-screen grid items-center  container shadow-lg px-4">
      <div className="grid items-center">
        <Image src={"/CD.svg"} width={300} height={300} />
        <h2 className="font-bold text-center text-3xl text-[#493BCD]">
          Who is <span className="text-black"> Craig Dewart?</span>
        </h2>
        <p className="text-center text-xl lg:text-3xl py-8">
          I’m a rising SEO professional with expertise in all things SEO and a
          genuine <br /> passion for helping agencies scale beyond infinity.
          <br />
          <br /> I’m a genuine guy with experience in the industry; through
          trials and tribulations,
          <br /> I live in the SEO trenches.
        </p>
        <section className="relative xl:pb-0">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                <a
                  href="#2"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#493BCD] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Continue reading my story
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sectioone;
