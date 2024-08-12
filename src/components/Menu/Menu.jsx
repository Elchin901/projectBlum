import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Menu() {
  useEffect(()=>{
    AOS.init({duration:2000})
  }, [])
  return (
    <nav className="bg-black py-32  items-center justify-center">
      <div className="text-center ">
        <h1 className="text-white font-bold py-16  text-8xl xs:text-4xl sm:text-5xl md:text-6xl">
          All Crypto - One App
        </h1>
        <button className="bg-white content-center text-black font-bold rounded-xl py-4 px-6">
          <a href="#">Launch Blum on Telegram</a>
        </button>

        <div className="z-0 pt-96 absolute md:pt-56 sm:pt-32 xs:pt-40 w-full  ">
          <div className=" relative  overflow-hidden whitespace-nowrap ">
            <div className="animate-slide-left-infinite size-[350px] gap[-6] flex md:size-[250px] sm:size-[190px] xs:size-[150px] ">
              <img src="toke6.png" className=" " />
              <img src="toke7.png" className="" />
              <img src="toke8.png" className="" />
              <img src="toke5.png" className=" " />
              <img src="toke6.png" className="" />             
            </div>
          </div>
        </div>

        <div className="flex justify-center py-32 relative z-1">
          <img src="phone.png" className="  w-[30vw]"></img>
        </div>

        <div>
          <div>
            <h3 className="text-white text-4xl font-bold font-mono">Support top 30+ chains</h3>
          </div>
          {/* <div className="size-28 flex grid">
            <img src="1.svg"></img>
            <img src="2.svg"></img>
            <img src="3.svg"></img>
            <img src="4.svg"></img>
            <img src="5.svg"></img>
            <img src="6.svg"></img>
            <img src="7.svg"></img>
            <img src="8.svg"></img>
            <img src="9.svg"></img>
            <img src="10.svg"></img>
            <img src="11.svg"></img>
            <img src="12.svg"></img>

          </div> */}
          <div className="grid grid-cols-6 md:grid md:grid-cols-4 sm:grid sm:grid-cols-3 xs:grid xs:grid-cols-2 justify-center  gap-24  my-20 px-12">
            <div className="flex justify-center ">
                <img src="1.svg" alt="Cosmos" className="h-7" data-aos="zoom-in" />
            </div>
            <div className="flex justify-center ">
                <img src="2.svg" alt="TON" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="3.svg" alt="Binance Smart Chain" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="4.svg" alt="Elrond" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="5.svg" alt="Polygon" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="6.svg" alt="Stacks" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="7.svg" alt="Arbitrum" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="8.svg" alt="Avalanche" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="9.svg" alt="Tron" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="10.svg" alt="Gnosis" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="11.svg" alt="Gnosis" className="h-7" data-aos="zoom-in"/>
            </div>
            <div className="flex justify-center ">
                <img src="12.svg" alt="Gnosis" className="h-7" data-aos="zoom-in"/>
            </div>
        </div>
        </div>

        {/* <div>
          <span className='text-[#282829] text-9xl font-extrabold w-full font-mono'>You can trade any token</span>
        </div> */}


      </div>
    </nav>
  );
}
