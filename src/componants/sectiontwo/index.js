import React from "react";
import Image from "next/image";
function Sectiontwo() {
  return (
    <div className="h-full bg-[#1F2A40] py-8 lg:h-screen">
      <div className="lg:flex container  shadow-lg h-full shadow-blue-500">
        <div className="lg:w-1/2 grid items-center">
          <div className="text-6xl  text-white px-16">
            {" "}
            Reliable. <span className="text-[#82C4D9]">Genuine. </span>
            <br />
            <span className="text-[#FF675E]">Passionate.</span>
            <div>
              <p className="text-xl text-white py-8">
                I like to see myself as an expert advisor
                <br /> with an insatiable hunger to help <br />
                businesses grow and provide valuable <br />
                lessons that last a lifetime. <br />
                <br />I believe in solid strategies and <br />
                actionable answers that you
                <br /> can operate on any issue in the future.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 grid items-center">
          <Image src={"/Craig photo.svg"} width={700} height={700} />
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo;
