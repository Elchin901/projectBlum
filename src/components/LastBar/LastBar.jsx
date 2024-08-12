export default function LastBar() {
  return (
    <nav className="bg-black pt-32">
      <div className=" mx-8 font-medium sm:flex sm:flex-col  sm:items-center sm:gap-6 md:flex md:flex-col  md:items-center md:gap-6 xs:flex xs:flex-col  xs:items-center xs:gap-6">
        <div className="justify-between flex sm:flex-col sm:flex  sm:items-center sm:gap-6 md:flex-col md:flex  md:items-center md:gap-6 xs:flex-col xs:flex  xs:items-center xs:gap-6">
          <div className="w-1/4 sm:w-5/6  sm:items-center sm:flex-col sm:flex sm:text-center sm:gap-6 md:w-5/6  md:items-center md:flex-col md:flex md:text-center md:gap-6 xs:w-5/6  xs:items-center xs:flex-col xs:flex xs:text-center xs:gap-6">
            <div className="py-6 sm:w-5/6 sm:flex-col sm:flex sm:justify-center sm:text-center md:w-5/6 md:flex-col md:flex md:justify-center md:text-center xs:w-5/6 xs:flex-col xs:flex xs:justify-center xs:text-center ">
              <img src="logo0.png" className="sm:m-auto md:m-auto xs:m-auto"></img>
            </div>
            <div className="sm:w-5/6  sm:flex-col sm:flex sm:justify-center sm:text-center md:w-5/6  md:flex-col md:flex md:justify-center md:text-center xs:w-5/6  xs:flex-col xs:flex xs:justify-center xs:text-center">
              <p className="text-gray-600 text-lg  ">
                Blum is a community where growth is nurtured, and possibilities
                bloom
              </p>
            </div>
          </div>

          <div className="w-1/4 sm:w-5/6 flex justify-center lg:relative xl:relative  sm:text-center md:w-5/6   md:text-center xs:w-5/6   xs:text-center ">
            <span className="text-gray-600  underline lg:absolute lg:bottom-0 lg:right-0 xl:absolute xl:bottom-0 xl:right-0 hover:text-white  ">
              <a href="#">Privarcy Policy</a>
            </span>
          </div>
        </div>

        <div className="flex justify-between sm:flex-col sm:flex   sm:items-center sm:gap-12 md:flex-col md:flex   md:items-center md:gap-12 xs:flex-col xs:flex   xs:items-center xs:gap-12 py-10">
          <div className="w-1/3  sm:w-5/6 md:w-5/6 xs:w-5/6 ">
            <p className="text-gray-600 text-lg hover:text-white sm:text-center md:text-center xs:text-center">
              For investment inquiries,<a href="#" className="underline hover:text-white ">please reach</a>  out to us. For community
              requests, please reach out to us <a href="#" className="underline hover:text-white">here</a>.
            </p>
          </div>

          <div className="w-1/3 sm:w-5/6  md:w-5/6  xs:w-5/6  ">
            <div className="flex  justify-end sm:justify-center sm:pr-0 md:justify-center md:pr-0 xs:justify-center xs:pr-0  bottom-0 right-0 m-0 gap-12 pr-8">
              <a href="#">
                <img src="/telegram.svg" className="w-6 h-6"></img>
              </a>

              <a href="#">
                <img src="/discord.svg" className="w-6 h-6"></img>
              </a>

              <a href="#">
                <img src="/twitter.svg" className="w-6  h-6"></img>
              </a>
              <a href="#">
                <img src="/linkedin.svg" className="w-5  h-5"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
