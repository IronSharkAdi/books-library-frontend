

function Navbar() {


  return(
        <div className="grid justify-around grid-cols-3 h-16 items-center">
            <div>
                <img src="/images/logo.png" className="w-10" alt="" />
            </div>
            <div>
                <div> <input type="text" placeholder="Search by books or authors" className=" p-2 px-4 backdrop-blur-xl bg-blue-100 rounded-full text-white focus:bg-blue-900/40 duration-500	 font-semibold  placeholder:font-normal	 placeholder:text-white/100 focus:outline-none  w-full border-white border" /></div>
            </div>
            <div className=" justify-self-end">
                <button className="  neo p-2  text-white w-32 font-semibold rounded-full">Login</button>
            </div>
        </div>
  ) ;
}

export default Navbar;
