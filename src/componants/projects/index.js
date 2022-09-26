import React from "react";

function Indexprojects() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid  grid-cols-1- md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
          <div className="md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Collaborate coding, with everyone.
            </h2>
            <p className="mt-4 text-lg text-gray-900 sm:mt-8 font-pj">
              Create custom landing pages with Rareblocks that converts more
              visitors than any website. With lots of unique blocks, you can
              easily build a page.
            </p>

            <hr className="mt-8 mb-6 border-gray-300" />

            <blockquote>
              <p className="text-base italic text-gray-900 font-pj">
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users.”
              </p>
            </blockquote>

            <div className="flex items-center mt-5">
              <img
                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/avatar.png"
                alt=""
              />
              <div className="ml-3">
                <p className="text-sm font-bold text-gray-900 font-inter">
                  Trevor Lane
                </p>
                <p className="text-sm font-medium text-gray-500 font-pj">
                  Director of Technology, CreativeGIG
                </p>
              </div>
            </div>
          </div>

          <div className="md:order-1">
            <img
              className="w-full max-w-md mx-auto"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/1/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Indexprojects;
