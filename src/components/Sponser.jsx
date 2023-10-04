// import "./index";
import google from "../imageForWebsite/google.png";
function Sponser() {
  return (
    <div>
      <div className="relative bg h-screen">
        <p className="text-center mb-8">
          <span className="heading heading1">SPO</span>
          <span className="heading heading2">NSORS</span>
        </p>
        <div
          className="grid grid-cols-3
      justify-center gap-y-10 justify-items-center max-md:grid-cols-2"
        >
          <div className="sp h-20 w-20 rounded-full bg-blue-500">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 rounded-full bg-blue-500 max-md:mt-12">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 rounded-full bg-blue-500 max-md:ml-12">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 md:ml-96 rounded-full bg-blue-500 max-md:mt-12">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 md:col-span-2 rounded-full bg-blue-500 max-md:mt-12 max-md:mr-12 ">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 rounded-full bg-blue-500 max-md:mr-12">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 rounded-full bg-blue-500">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
          <div className="h-20 w-20 rounded-full bg-blue-500 max-md:mt-12">
            <img
              className="rounded-full border-8 border-blue-500"
              src={google}
              alt="Google Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponser;
