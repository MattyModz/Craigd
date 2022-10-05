import Image from "next/image";
function Index() {
  return (
    <div className=" bg-[#1F2A40] lg:h-screen  ">
 
      
     
        
          <div className="py-16 px-4 bg-rect">
            
            <div className="flex justify-center">
            <div className="flex justify-center ">
            <Image src={"/Hero/index.svg"} className="text-center" height={100} width={800}/></div>
            
            </div>
              <div className="flex justify-center">
                    <Image src={"/Hero/pill.svg"} className="text-center" height={200} width={800}/>
                    </div>
  
                    <div className="text-center  ">
            <Image src={"/Hero/subtitle.svg"} className="text-center" height={100} width={800}/></div>
            </div>
<div className="flex justify-center">
<Image src={"/Hero/pillbottom.svg"} className="text-center" height={100} width={800}/>
</div>

           <div className="flex justify-center">
            
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


            {/* <div>
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
            </div> */}