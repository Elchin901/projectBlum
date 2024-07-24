export default function Menu() {
  return (
    <nav className="bg-black py-10 flex items-center justify-center">
      <div className="text-center ">
        <h1 className="text-white text-8xl font-bold py-12">
          All Crypto - One App
        </h1>
        <button className="bg-white content-center text-black font-bold rounded-xl py-4 px-6">
          <a href="#">Launch Blum on Telegram</a>
        </button>

        <div className="z-0 pt-40 absolute">
          <div className=" flex  overflow-hidden size-80">
            <div className="flex animate-loop-scroll  ">
              <img src="toke0.png" className="max-w-none"></img>
              <img src="toke1.png" className="max-w-none"></img>
              <img src="toke2.png" className="max-w-none"></img>
              <img src="toke3.png" className="max-w-none"></img>
              <img src="toke5.png" className="max-w-none"></img>
            </div>
            {/* <div className="flex animate-loop-scroll  " aria-hidden="true">
              <img src="toke0.png" className="max-w-none"></img>
              <img src="toke1.png" className="max-w-none"></img>
              <img src="toke2.png" className="max-w-none"></img>
              <img src="toke3.png" className="max-w-none"></img>
              <img src="toke5.png" className="max-w-none"></img>
            </div> */}
          </div>
        </div>

        <div className="flex justify-center py-32 relative z-10">
          <img src="phone.png" className="cover w-[30vw]"></img>
        </div>

        <div className="text-center">
          <h3 className="text-white text-3xl font-bold py-28">
            Support top 30+ chains
          </h3>
          <div className="grid grid-cols-6 gap-16 px-8">
            <img src="1.svg" className=" h-[28px]"></img>
            <img src="2.svg" className=" h-[28px]"></img>
            <img src="3.svg" className=" h-[28px]"></img>
            <img src="4.svg" className=" h-[28px]"></img>
            <img src="5.svg" className=" h-[28px]"></img>
            <img src="6.svg" className=" h-[28px]"></img>
            <img src="7.svg" className=" h-[28px]"></img>
            <img src="8.svg" className=" h-[28px]"></img>
            <img src="9.svg" className=" h-[28px]"></img>
            <img src="10.svg" className=" h-[28px]"></img>
            <img src="11.svg" className=" h-[28px]"></img>
            <img src="12.svg" className=" h-[28px]"></img>
          </div>

          <div className="py-60">
            <h2 className="text-8xl  p-0 font-extrabold text-gray-500">
              You can trade any token
            </h2>
          </div>
        </div>
      </div>
    </nav>
  );
}
