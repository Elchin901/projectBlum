export default function LastBar() {
  return (
    <nav className="bg-black pt-32">
      <div className=" mx-8 font-medium">
        <div className="flex  justify-between sm:flex-col sm:flex sm:justify-center sm:text-center">
          <div className="w-1/4 sm:w-5/6 sm:text-center sm:justify-center sm:flex sm:flex-col  ">
            <div className="py-6 sm:5/6">
              <img src="logo0.png" className=""></img>
            </div>
            <div className="sm:w-5/6">
              <p className="text-gray-600 text-lg  ">
                Blum is a community where growth is nurtured, and possibilities
                bloom
              </p>
            </div>
          </div>

          <div className="w-1/4 sm:w-5/6 relative">
            <span className="text-gray-600 absolute underline hover:text-white bottom-0 right-0 m-0">
              <a href="#">Privarcy Policy</a>
            </span>
          </div>
        </div>

        <div className="flex sm:flex-col sm:flex sm:justify-center sm:text-center justify-between py-10">
          <div className="w-1/3 sm:w-5/6">
            <p className="text-gray-600 text-lg hover:text-white">
              For investment inquiries,<a href="#" className="underline hover:text-white ">please reach</a>  out to us. For community
              requests, please reach out to us <a href="#" className="underline hover:text-white">here</a>.
            </p>
          </div>

          <div className="w-1/3 sm:w-5/6 flex relative ">
            <div className="flex  justify-end absolute bottom-0 right-0 m-0 gap-12 pr-8">
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
