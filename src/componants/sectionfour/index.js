import React from "react";
import Image from "next/image";
function Sectionfour() {
  return (
    <>
      <section className="">
        <div className="  container  ">
          <div className="text-center text-6xl ">
            What Make a <br />{" "}
            <span className="text-[#A154A1] font-bold">
              {" "}
              Great SEO Consultant?
            </span>
          </div>
          <div className="text-center text-4xl  text-[#FF675E] font-bold py-8">
            Proven Statistics
          </div>
        </div>
        <p className="text-center text-3xl">
          It’s easy for me to tell you to trust me, but before purchasing
          anything we care <br />
          about, a smart person will always look at the views. So let them do
          the talking
        </p>
        <div className="lg:flex container py-24">
          <div className="lg:w-1/2 lg:flex justify-center lg:text-left text-center mb-16 lg:mb-0">
            <div className="lg:w-1/2 pl-8">
              {" "}
              <Image src="/JB.svg" height={300} width={300} />
            </div>
            <div className="lg:w-1/2">
              <div>
                <Image src="/starsblue.svg" height={35} width={150} />
              </div>
              <div>
                <p className="font-bold text-xl py-4 mb-4">
                  One of the best content agencies we've used...
                </p>
              </div>
              <div>
                <p className="mb-4">
                  The quality of the content is great, it
                  <br /> need minimal edits from our in-house
                  <br /> team and the account management is
                  <br /> strong, always keeping us updated.
                </p>
              </div>
              <div className="font-bold py-4">James Brockbank</div>
              <div className="font-bold">CEO - Digitaloft</div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:flex lg:text-left text-center justify-center ">
            <div className="lg:w-1/2 pl-8">
              {" "}
              <Image
                src="/SUG.svg"
                height={300}
                width={300}
                className="rounded-xl"
              />
            </div>
            <div className="lg:w-1/2">
              <div>
                <Image src="/starsblue.svg" height={35} width={150} />
              </div>
              <div>
                <p className="py-4 mb-4 font-bold text-xl">
                  {" "}
                  If you’re looking to create content at scale, reach out to
                  them.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Ive used @mycontentpal for a recent
                  <br /> project, and I was super impressed with
                  <br /> the quality of work and overall process.
                  <br /> Thanks, @Craigd0412 for building the <br />
                  phenomenal service.
                </p>
              </div>
              <div className="font-bold">Suganthanmn </div>
              <div className="font-bold">Co-founder of @snippetconsult</div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        {" "}
        <div className="border-b border-8 max-w-lg "></div>
      </div>
    </>
  );
}

export default Sectionfour;
