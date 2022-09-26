import Image from "next/image";
function Index() {
  return (
    <div className=" bg-[#1F2A40] text-white mb-8 lg:h-screen px-4  ">
      <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
        <div className="w-1/4"></div>
        <div className="relative px-4  mx-auto sm:px-6 lg:px-8 ">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="lg:text-5xl text-3xl font-bold">
              Tired of{" "}
              <span className="text-[#82C4D9]"> finding problems </span>
              <br />
              and losing solutions?
            </h1>

            <div className="flex justify-center">
              <div className="grid py-12">
                <section className="relative xl:pb-0">
                  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#00ABB2] via-[#A154A1] to-[#A154A1] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-150 animate-tilt"></div>
                  <div className="relative">
                    <div className="flex  border px-3 bg-white lg:text-3xl lg:pb-2 rounded-full">
                      <div className="mt-1 lg:pt-1">
                        <Image src="/Mag.svg" width={30} height={28} />
                      </div>
                      <div className="text-gray-600 mt-1.5  lg:px-32 px-12 ">
                        {" "}
                        How can Craig help you?
                      </div>
                      <div className="mt-1.5">
                        {" "}
                        <Image src="/Mic.svg" width={30} height={22} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div></div>
            <div className="text-center  ">
              <p className="  mt-2 text-white lg:text-3xl text-xl text-base leading-7 font-inter">
                Heres how to{" "}
                <span className="text-[#82C4D9]"> 10x your business </span> in 3
                months without <br className="hidden lg:block" />
                blowing your budget, even if your options are limited.
              </p>
            </div>
            <div className="flex justify-center py-8 ">
              <div className="flex rounded-full border-t-4 border-black/30 bg-[#0D2149] px-8  ">
                <div className="grid lg:grid-cols-3 grid-cols-2  content-center">
                  <div>
                    {" "}
                    <Image src="/stars.svg" width={150} height={50} />
                  </div>
                  <div className="mt-3 lg:block hidden ">
                    4.99 based on over 300 reviews
                  </div>
                  <div>
                    {" "}
                    <Image src="/faces.svg" width={150} height={50} />
                  </div>
                </div>
              </div>
            </div>
            <section className="relative xl:pb-0">
              <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                  <div className="relative inline-flex  group">
                    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-150 animate-tilt"></div>
                  </div>
                </div>
              </div>
            </section>
            <div>
              <div className="">
                <div className="inline-grid grid-cols-3 lg:gap-8 gap-2  items-center  ">
                  <img
                    className="object-contain "
                    src="/digitalloft.svg"
                    alt=""
                  />
                  <img
                    className="object-contain "
                    src="/seopartners.svg"
                    alt=""
                  />
                  <img className="object-contain " src="/APV.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;

// <div className="mt-8 lg:mt-12 lg:flex lg:items-center ">
//   <div className="flex justify-center flex-shrink-0 -space-x-4 overflow-hidden lg:justify-start">
//     <img
//       className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
//       src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png"
//       alt=""
//     />
//     <img
//       className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
//       src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png"
//       alt=""
//     />
//     <img
//       className="inline-block rounded-full w-14 h-14 ring-2 ring-white"
//       src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png"
//       alt=""
//     />
//   </div>
// </div>;
