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

        <div className="flex justify-center py-32">
          <img src="phone.png" className="cover w-[30vw]"></img>
        </div>
        <div className="text-center">
          <h3 className="text-white text-3xl font-bold py-28">Support top 30+ chains</h3>
          <div className="grid grid-cols-6 gap-16 px-8">
            <img src="1.svg" className=" h-[28px]"></img>
            <img src="2.svg" className=" h-[28px]" ></img>
            <img src="3.svg" className=" h-[28px]" ></img>
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
            <h2 className="text-8xl  p-0 font-extrabold text-gray-500">You can trade any token</h2>
          </div>
        </div>
      </div>
    </nav>
  );
}
