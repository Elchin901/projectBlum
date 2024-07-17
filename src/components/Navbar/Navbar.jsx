

export default function Navbar() {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-8 py-1">
        <div className="flex items-center ">
          <div className="flex items-center space-x-2"> 
            <a href="#" className="underline">
              <img src="/logo0.png" className=" h-[57px] w-max  "></img>
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-10 px-8 ">
          <h3 className="font-semibold text-[18px] px-4">
            <a href="#" className="hover:text-gray-300 duration-300">Blog</a>
          </h3>

          <a  href="#">
            <img src="/telegram.svg" className="w-6 h-6"></img>
          </a>

          <a href="#">
            <img src="/discord.svg" className="w-6 h-6"></img>
          </a>

          <a href="#">
            <img src="/twitter.svg" className="w-6  h-6"></img>
          </a>
        </div>
      </nav>
  )
}

