import React from "react";
import Image from "next/image";
function Sectionseven() {
  return (
    <div className="h-full mb-4 shadow-lg shadow-purple-100 container lg:px-16 px-8 py-4">
      <div className="lg:flex container h-screen">
        <div className="lg:w-1/2 grid items-center">
          <Image src={"/working photo.svg"} width={500} height={500} />
        </div>

        <div className="lg:w-1/2 lg:grid items-center">
          <div className="text-6xl  text-[#493BCD] text-right">
            {" "}
            Who do i want,
            <br />
            <span className="text-black">to work with?</span>
            <div>
              <p className="text-xl text-black py-8 text-right">
                I want to work with businesses that aren’t afraid <br />
                of change. My ideal client would be someone <br /> ready to
                fully commit and give 100%. <br /> <br /> If you have big goals
                and aspirations but little <br />
                progress has happened, I want to talk to you.
              </p>
            </div>
            <section class="relative xl:pb-0 mb-8">
              <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="max-w-3xl mb-8 mx-auto text-end">
                  <div class="relative inline-flex  group">
                    <div class="absolute  transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                    <a
                      href="#"
                      title=""
                      class="relative inline-flex items-end justify-end px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-[#493BCD] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Schedule a call today!
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionseven;
