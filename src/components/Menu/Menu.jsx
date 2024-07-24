export default function Menu() {
  return (
    <nav className="bg-black py-10  items-center justify-center">
      <div className="text-center ">
        <h1 className="text-white text-8xl font-bold py-12">
          All Crypto - One App
        </h1>
        <button className="bg-white content-center text-black font-bold rounded-xl py-4 px-6">
          <a href="#">Launch Blum on Telegram</a>
        </button>

        <div className="z-0 pt-40 absolute ">
          <div className="logos group relative overflow-hidden whitespace-nowrap   py-10 ">
            <div className="animate-slide-left-infinite  inline-block ">
              <img src="toke1.png" className=" inline h-70" />
              <img src="toke2.png" className=" inline h-70" />
              <img src="toke3.png" className=" inline h-70" />
              <img src="toke4.png" className=" inline h-70" />
              <img src="toke5.png" className=" inline h-70" />
            </div>
            <div className="animate-slide-left-infinite  inline-block ">
              <img src="toke1.png" className=" inline h-70" />
              <img src="toke2.png" className=" inline h-70" />
              <img src="toke3.png" className=" inline h-70" />
              <img src="toke4.png" className=" inline h-70" />
              <img src="toke5.png" className=" inline h-70" />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-32 relative z-10">
          <img src="phone.png" className="cover w-[30vw]"></img>
        </div>
      </div>
    </nav>
  );
}
