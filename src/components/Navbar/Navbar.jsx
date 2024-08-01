import  { useState } from "react";
import classNames from "classnames";
import "hamburgers/dist/hamburgers.css";

export default function Navbar() {
  const [opened, setOpened] = useState(false);

  return (
    <nav className="bg-black fixed z-40   w-full text-white flex items-center justify-between p-8 py-1">
      <div className="flex items-center z-40 ">
        <div className="flex items-center space-x-2">
          <a href="#" className="underline">
            <img src="/logo0.png" className=" h-[57px] w-max  "></img>
          </a>
        </div>
      </div>

      <div className="flex  items-center space-x-10 px-8 md:hidden sm:hidden xs:hidden ">
        <h3 className="font-semibold text-[18px] px-4">
          <a href="#" className="hover:text-gray-300 duration-300">
            Blog
          </a>
        </h3>

        <a href="#">
          <img src="/telegram.svg" className="w-6 h-6"></img>
        </a>

        <a href="#">
          <img src="/discord.svg" className="w-6 h-6"></img>
        </a>

        <a href="#">
          <img src="/twitter.svg" className="w-6  h-6"></img>
        </a>
      </div>

      <div className="lg:hidden xl:hidden  z-20 ">
        <div
          className={classNames(`tham tham-e-squeeze  tham-w-6`, {
            "tham-active": opened, 
          })}
          onClick={() => setOpened(!opened)}
        >
          <div className="tham-box ">
            <div className="tham-inner bg-slate-400" />
          </div>
        </div>

          <div
            className={classNames(
              "transition-transform duration-300 ease-in-out transform  bg-black shadow-lg",
              { "translate-y-16": opened, "-translate-y-full": !opened },
              " absolute  top-[-1px]  left-0 right-0"
            )}
          >
            <div className="flex flex-col justify-center gap-14  ">
              <h3 className="font-semibold text-[18px] text-center pt-12 px-4 block">
                <a href="#" className="hover:text-gray-300 duration-300">
                  Blog
                </a>
              </h3>

              <a href="#" className="flex align-items justify-center">
                <img src="/telegram.svg" className="w-6 h-6"></img>
              </a>

              <a href="#" className="flex align-items justify-center">
                <img src="/discord.svg" className="w-6 h-6"></img>
              </a>

              <a href="#" className="flex pb-10 align-items justify-center">
                <img src="/twitter.svg" className="w-6  h-6"></img>
              </a>
            </div>
          </div>
        

        <div className="flex flex-col justify-center mt-[-300px]">
          <h3 className="font-semibold text-[18px] text-center px-4 block">
            <a href="#" className="hover:text-gray-300 duration-300">
              Blog
            </a>
          </h3>

          <a href="#" className="flex align-items justify-center">
            <img src="/telegram.svg" className="w-6 h-6"></img>
          </a>

          <a href="#" className="flex align-items justify-center">
            <img src="/discord.svg" className="w-6 h-6"></img>
          </a>

          <a href="#" className="flex align-items justify-center">
            <img src="/twitter.svg" className="w-6  h-6"></img>
          </a>
        </div>
      </div>
    </nav>
  );
}
