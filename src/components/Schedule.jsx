import bulletin from "../imageForWebsite/bulletin.png";

function Schedule() {
  return (
    <div className="">
      <div className="Mainapp flex flex-col text-white bg-none  ml-16">
        <div className="Schtitle font-Michroma  text-5xl md:text-7xl flex justify-start pt-40 pr-80 md:justify-center md:pl-20 ">
          <span>SCHE</span>
          <span className="text-sky-500 ">DULE</span>
        </div>
        <div className="mainBody flex  justify-center items-center pt-40 md:pt-72 pr-64 pb-44 md:pb-72 ml-32 lg:ml-0 ">
          <div className="daycon flex flex-col pb-20 pr-20">
            <div className="day1 flex flex-col mb-32">
              <div className="daytitle font-Changa text-6xl md:text-7xl  text-slate-200 underline underline-offset-4 font-thin shrink-0 hover:text-7xl md:hover:text-8xl duration-300 delay-100 pr-32 pb-16">
                DAY1
              </div>
              <div className="daycon flex flex-col">
                <div className="content text-lg flex md:hover:text-2xl duration-200 delay-100 md:text-xl">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin delay-150"
                    />
                  </div>
                  <div className="p-8">This place is for content</div>
                </div>
                <div className="content text-lg flex md:hover:text-2xl duration-200 delay-100 md:text-xl">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin delay-150"
                    />
                  </div>
                  <div className="p-8">This place is for content</div>
                </div>
                <div className="content text-lg  flex md:hover:text-2xl duration-200 delay-100 md:text-xl">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin delay-150"
                    />
                  </div>
                  <div className="p-8">This place is for content</div>
                </div>
              </div>
            </div>
            <div className="day2 flex flex-col mt-20 md:mt-32">
              <div className="daytitle font-Changa text-6xl md:text-7xl text-slate-200 underline underline-offset-4 font-thin shrink-0 hover:text-7xl md:hover:text-8xl duration-200 delay-100 pr-32 pb-16">
                DAY2
              </div>
              <div className="daycon flex flex-col">
                <div className="content flex text-lg md:hover:text-2xl duration-200 delay-100 md:text-xl">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin-slow delay-150"
                    />
                  </div>
                  <div className="p-8 max-h-40 max-w-6">
                    This place is for content
                  </div>
                </div>
                <div className="content flex text-lg  md:hover:text-2xl duration-200 delay-100 md:text-xl">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin delay-150"
                    />
                  </div>
                  <div className="p-8">This place is for content</div>
                </div>
                <div className="content flex text-lg md:text-xl md:hover:text-2xl duration-200 delay-100">
                  <div className="p-8 shrink-0">
                    <img
                      src={bulletin}
                      alt="bulletin"
                      className="h-9 animate-spin-slow hover:animate-spin delay-150"
                    />
                  </div>
                  <div className="p-8">This place is for content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
