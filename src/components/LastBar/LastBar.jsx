export default function LastBar() {
  return (
    <nav className="bg-black pt-32">
      <div className=" mx-8 font-medium">
        <div className="flex justify-between">
          <div className="w-1/4">
            <div className="py-6">
              <img src="logo0.png"></img>
            </div>
            <div className="">
              <p className="text-gray-600 text-lg  ">
                Blum is a community where growth is nurtured, and possibilities
                bloom
              </p>
            </div>
          </div>

          <div className="w-1/4 relative">
            <span className="text-gray-600 absolute underline bottom-0 right-0 m-0">
              <a href="#">Privarcy Policy</a>
            </span>
          </div>
        </div>

        <div className="flex justify-between py-10">
          <div className="w-1/3">
            <p className="text-gray-600 text-lg">
              For investment inquiries, please reach out to us. For community
              requests, please reach out to us here.
            </p>
          </div>

          <div className="w-1/3 flex ">
            <div className="flex  justify-end">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
