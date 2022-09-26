import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  // const router = useRouter;
  const [Menu, showMenu] = useState(false);
  return (
    <>
      <nav className=" w-full select-none shadow-sm bg-[#1F2A40] ">
        <div className="flex items-center justify-between h-20 px-8 py-2 mx-auto max-w-7xl md:h-24 sm:box-content">
          <div className="flex items-center w-64">
            <a
              href="#_"
              className="flex items-center order-first font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center"
            >
              <span className=" pt-6 text-xl font-black leading-none text-gray-900 select-none logo">
                <Link href={"/"} passHref>
                  <div className="">
                    <Image
                      src={"/cdlogo.svg"}
                      width={150}
                      height={150}
                      alt="Logo"
                    />
                  </div>
                </Link>
              </span>
            </a>
          </div>
          <div>
            <div className="py-2 text-white font-bold cursor-pointer sm:block md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none">
              <button className="bg-[#82C4D9] text-white font-bold lg:text-3xl p-3 rounded-full ml-8 px-12 mt-6 border-t-4 border-black/60">
                Contact
              </button>
            </div>
            <div className={`${Menu ? "" : "hidden md:block lg:block "}`}>
              <div className="fixed  top-0 z-30 block text-gray-500 cursor-pointer pt-7 sm:pt-8 md:hidden lg:hidden hover:text-gray-700 focus:text-gray-700 focus:outline-none ">
                <svg
                  onClick={() => showMenu((state) => !Menu)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
              <ul className="bg-gradient-to-br from-[#1A0976] via-[#100750] to-black   fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center py-8 space-y-8 text-3xl md:space-y-0 md:bg-none md:text-base md:flex md:flex-row md:relative">
                <li
                  className="text-white cursor-pointer hover:text-gray-400 md:ml-10"
                  onClick={() => showMenu((state) => !Menu)}
                >
                  <Link href={"/"} passHref>
                    My Story
                  </Link>
                </li>

                <li
                  className="text-white cursor-pointer hover:text-gray-400 md:ml-10"
                  onClick={() => showMenu((state) => !Menu)}
                >
                  <Link href={"/contact"} passHref>
                    Podcasts
                  </Link>
                </li>

                <button className="bg-[#82C4D9] text-white   p-3 rounded-full ml-8 px-8">
                  Book a call
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
