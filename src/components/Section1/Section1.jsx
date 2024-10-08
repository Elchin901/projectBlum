import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Section1() {
  useEffect(()=>{
    AOS.init({duration:2500})
  }, [])

  return (
    <nav className="bg-black">
      <div className="flex justify-evenly  md:flex-col md:items-center md:text-center sm:flex-col sm:items-center sm:text-center xs:flex-col xs:items-center xs:text-center  ">
        <div className=" w-1/4  md:w-1/2 sm:w-1/2 xs:w-10/12 flex justify-center items-center ">
            <img src="phone2.png" className="h-[80vh] animation object-center" data-aos="zoom-in"></img>  
        </div>

        <div className="w-1/4 md:w-4/6 sm:w-10/12 xs:w-10/12 flex md:justify-center md:items-center sm:justify-center sm:items-center xs:justify-center xs:items-center flex-col  py-12">
          <div className="py-3">
            <img src="ico1.svg"></img>
          </div>

          <div className="text-white ">
            <h3 className="font-bold text-3xl py-6">Every coin you need</h3>
            <p className="text-gray-500 font-bold md:mx-0 sm:justify-center sm:items-center sm:mx-0  xs:justify-center xs:items-center xs:mx-0 mr-24">
              Blum brings you every coin you need. Just one place, no more
              switching between multiple platforms. Easy, right?
            </p>
          </div>
          <div className="text-gray-400 text-sm font-mono md:px-0 sm:px-0 sm:justify-center sm:items-center xs:px-0 xs:justify-center xs:items-center flex flex-wrap gap-2 py-5 ">
            <div className="bg-customGray    font-bold rounded-md px-4 py-3 ">
              <h4>Classic Tokens</h4>
            </div>
            <div className="bg-customGray   font-bold rounded-md px-4 py-3  ">
              <h4>Meme Coins</h4>
            </div>
            <div className="bg-customGray    font-bold rounded-md px-4 py-3">
              <h4>Hot&Fresh Tokens</h4>
            </div>
            <div className="bg-customGray   font-bold rounded-md px-4 py-3">
              <h4>L1/L2 Tokens</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col md:justify-center md:items-center md:text-center sm:flex-col sm:justify-center sm:items-center sm:text-center xs:flex-col xs:justify-center xs:items-center xs:text-center justify-between px-6 py-48">
        <div className="w-1/5 md:w-4/6 sm:w-5/6 xs:w-5/6">
          <div>
            <div>
              <img src="ico1.svg" alt="" className="py-4 md:m-auto sm:m-auto xs:m-auto" />
            </div>
            <h3 className="text-white text-2xl font-bold py-6 ">Easy to use</h3>
            <p className="text-gray-600 text-base font-medium ">
              Trade without chain switching, native token gas fees, or endless
              transaction confirmations.
            </p>
          </div>
          <div className="py-10">
            <div>
              <img src="ico3.svg" alt="" className="py-4 md:m-auto sm:m-auto xs:m-auto" />
            </div>
            <h3 className="text-white text-2xl font-bold py-6 ">Easy to use</h3>
            <p className="text-gray-600 text-base font-medium ">
              Trade without chain switching, native token gas fees, or endless
              transaction confirmations.
            </p>
          </div>
        </div>

        <div className="w-1/5 md:4/6 sm:w-5/6 xs:w-5/6">
          <img src="phone3.png" className="h-[85vh] animation md:m-auto sm:m-auto xs:m-auto " data-aos="zoom-in"></img>
        </div>

        <div className="w-1/5 md:w-4/6 sm:w-5/6 xs:w-5/6">
          <div>
            <div>
              <img src="ico4.svg" alt="" className="py-4 md:m-auto sm:m-auto xs:m-auto" />
            </div>
            <h3 className="text-white text-2xl font-bold py-6 ">Easy to use</h3>
            <p className="text-gray-600 text-base font-medium ">
              Trade without chain switching, native token gas fees, or endless
              transaction confirmations.
            </p>
          </div>
          <div className="py-10">
            <div>
              <img src="ico5.svg" alt="" className="py-4 md:m-auto sm:m-auto xs:m-auto" />
            </div>
            <h3 className="text-white text-2xl font-bold py-6 ">Easy to use</h3>
            <p className="text-gray-600 text-base font-medium ">
              Trade without chain switching, native token gas fees, or endless
              transaction confirmations.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around  md:flex-col md:justify-center md:items-center md:text-center sm:flex-col sm:justify-center sm:items-center sm:text-center xs:flex-col xs:justify-center xs:items-center xs:text-center">
        <div className="w-96 py-12">
          <div className="py-3 ">
            <img src="ico5.svg" className='md:m-auto sm:m-auto xs:m-auto'></img>
          </div>
          <div className="text-white">
            <h3 className="font-bold text-3xl py-6">
              Your gateway to a rewarding crypto experience
            </h3>
            <p className="text-gray-500 font-bold md:mr-0 sm:mr-0 xs:mr-0  mr-24">
              At Blum, we believe in making your crypto journey not just
              profitable, but also enjoyable and interactive
            </p>
          </div>
          <div className="text-gray-400  md:px-0 md:justify-center md:items-center sm:px-0 sm:justify-center sm:items-center xs:px-0 xs:justify-center xs:items-center text-sm font-mono text-cenetr flex flex-wrap gap-2 py-5 ">
            <div className="bg-customGray    font-bold rounded-md px-4 py-3 ">
              <h4>Leaderboards</h4>
            </div>
            <div className="bg-customGray   font-bold rounded-md px-4 py-3  ">
              <h4>Social Interactions</h4>
            </div>
            <div className="bg-customGray    font-bold rounded-md px-4 py-3">
              <h4>Rewarding Point System</h4>
            </div>
            <div className="bg-customGray   font-bold rounded-md px-4 py-3">
              <h4>Ordinals & NFTs</h4>
            </div>
          </div>
        </div>
        <div className="text-center md:w-1/2 sm:w-1/2 xs:w-10/12 flex justify-center items-center w-80">
          <img src="phone4.png" className="h-[85vh] animation" data-aos="zoom-in"></img>
        </div>
      </div>




      <div className=" w-full inline-flex flex-nowrap py-40 ">
        <div className="transform rotate-3 mx-1 overflow-hidden whitespace-nowrap  py-4 bg-lime-400 ">
          <div className="animate-slide-left-infinite  inline-block ">
            <span className="text-black text-3xl  font-bold inline ">
              {" "}
              TRADE, CONNECT, GROW - EMBRACE THE FUTURE OF CRYPTO -
            </span>
            <span className="text-black text-3xl  font-bold inline ">
              {" "}
              TRADE, CONNECT, GROW - EMBRACE THE FUTURE OF CRYPTO -
            </span>
          </div>
          <div className="animate-slide-left-infinite  inline-block ">
            <span className="text-black text-3xl  font-bold inline ">
              {" "}
              TRADE, CONNECT, GROW - EMBRACE THE FUTURE OF CRYPTO -
            </span>
            <span className="text-black text-3xl  font-bold inline ">
              {" "}
              TRADE, CONNECT, GROW - EMBRACE THE FUTURE OF CRYPTO -
            </span>
          </div>
        </div>
      </div>


      <div className="flex justify-around md:flex-col md:justify-center md:items-center md:text-center sm:flex-col sm:justify-center sm:items-center sm:text-center xs:flex-col xs:justify-center xs:items-center xs:text-center  pt-10 rounded-xl bg-lime-300 mx-8">
        <div className="w-1/4 md:w-1/2 xs:w-5/6 sm:w-5/6 text-center content-center animation " data-aos="zoom-in">
          <div className=" text-center">
            <h3 className="text-4xl sm:text-2xl xs:text-xl sm:m-0 font-bold ">
              Start your crypto journey with Blum today
            </h3>
          </div>
          <div className="py-10">
            <button className="bg-white content-center text-black font-semibold rounded-xl py-4 px-6">
              <a href="#">Launch Blum on Telegram</a>
            </button>
          </div>
        </div>
        <div className="w-1/3 md:w-1/2 sm:w-4/6 xs:w-4/6 ">
          <img src="phone5.png"></img>
        </div>
      </div>
    </nav>
  );
}
