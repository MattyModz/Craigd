import React from "react";
import Image from "next/image";
function Sectionthree() {
  return (
    <div className=" h-full mb-16 lg:px-12 px-4 lg:mt-48  ">
      <div className="lg:flex container  ">
        <div className="lg:w-1/2 grid items-center">
          <Image src={"/ideas vector.svg"} width={400} height={400} />
        </div>

        <div className="lg:w-1/2 grid items-center">
          <div className="text-6xl  text-black text-right">
            {" "}
            I Bring The Idea,
            <br />
            <span className="text-[#82C4D9]">You Get The Say.</span>
            <div>
              <p className="text-3xl text-[##1F2A40] py-8 text-right">
                My clients can choose the SEO practice that <br /> works for
                them, depending on their budget and <br /> goals. Hundreds of
                strategies have been used in <br /> SEO, and not all of them
                work. I suggest <br /> booking a free strategy call with me so
                we can <br /> discuss the best strategy for you.{" "}
              </p>
            </div>
            <section class="relative xl:pb-0 ">
              <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="max-w-3xl mx-auto text-end">
                  <div class="relative inline-flex  group">
                    <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

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

export default Sectionthree;
