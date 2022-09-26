import React from "react";
import Image from "next/image";
function Sectionsix() {
  return (
    <section className="h-full  bg-[#1F2A40] px-4 ">
      <div className="lg:container px-4 lg:px-16 lg:shadow-lg shadow-purple-100 ">
        <div className="lg:flex  ">
          <div className="lg:w-1/2 grid items-center leading-11 lg:text-7xl text-4xl py-8 font-bold text-white ">
            The Worries
            <br />
            of choosing an <br />
            SEO Consultant.
          </div>
          <div className="lg:w-1/2">
            {" "}
            <div className="py-12 flex justify-center text-2xl">
              <Image src={"/worried.svg"} width={400} height={400} />
            </div>
          </div>
        </div>

        <div>
          <div className="lg:container -mt-16  text-3xl ">
            <div className="text-[#82C4D9] text-2xl  font-bold">
              &quot;They will take over my business.&quot;
            </div>

            <p className="text-white py-8 flex justify-start text-2xl">
              {" "}
              This is a common concern. As an SEO consultant, I’m there to
              support your business and sky-
              <br />
              rocket it to success. However, I can&quot;t do this without your
              blessing and support. <br /> <br /> We must work together to
              figure out the best strategy for your business, as you know your{" "}
              <br />
              business best, and I will never try to take that away from you. My
              expertise will come in once you’ve <br /> taught me everything
              there is to know.{" "}
            </p>
          </div>
        </div>
        <div className="container text-xl">
          <div className="text-[#82C4D9] text-2xl font-bold">
            &quot;It costs too much&quot;
          </div>
          <p className="text-white py-8 text-2xl">
            {" "}
            Hiring a consultant is an investment. With me, you’ll avoid the
            mistakes you’d have <br /> usually made, costing you thousands. I
            help take away the guesswork and give <br /> you actionable answers
            instead.
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}

export default Sectionsix;
