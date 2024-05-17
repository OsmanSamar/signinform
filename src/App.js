import SignIn from "./pages/SignIn";
import BgImage from "./assets/bg-intro-desktop.png";

function App() {
  return (
    <>
      <div
        className="bg-[#ec9494] bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div
          className="  mx-auto grid grid-cols-1 gap-2 pt-20
          pb-10 px-56 lg:grid-cols-2 lg:gap-10 lg:place-items-center
           "
        >
          {/* className=" container flex flex-col max-w-7xl mx-auto items-center
          px-6 mt-10 space-y-0 mobile-image p-8 md:space-y-0 md:flex-row
          md:bg-image " */}

          <div className="flex flex-col mb-32 space-y-12  md:pl-4 md:w-1/2">
            <h1
              className="text-white  text-2xl font-bold text-center 
           md:text-3xl md:text-left"
            >
              Learn to code by watching others
            </h1>
            <p className="text-white  text-center  md:text-left">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-[450px] mx-auto  ">
            {/* className="flex flex-col items-center w-[350px] md:w-[450px] mx-auto " */}
            <a
              href="#Try"
              className="p-4 mb-1 text-xs  text-center text-white bg-[#6d28d9] 
            rounded  self-baseline  shadow-2xl w-full  md:text-sm md:w-[380px]    md:ml-8  "
            >
              Try it free 7 days then $20/mo. thereafter
            </a>
            <div className="sm:p-4"></div>
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
