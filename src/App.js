import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <div className="bg-[#ec9494] mx-auto p-6  min-h-screen  ">
        <div
          className=" container flex flex-col items-center px-6  mt-5  space-y-0 
          mobile-image p-8  
         md:space-y-0 md:flex-row  md:bg-image "
        >
          <div className="flex flex-col mb-32 space-y-12 pr-8 md:pl-10 md:w-1/2">
            <h1
              className="text-white max-w-md text-2xl font-bold text-center 
           md:text-5xl md:text-left"
            >
              Learn to code by watching others
            </h1>
            <p className="text-white max-w-sm text-center  md:text-left">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="flex flex-col items-center w-full md:w-[450px] mx-auto  ">
            {/* className="flex flex-col items-center w-[350px] md:w-[450px] mx-auto " */}
            <a
              href="#Try"
              className="p-5 mb-1  text-center text-white bg-[#6d28d9] 
            rounded  self-baseline  shadow-2xl w-full  md:w-[380px]    md:ml-8  "
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
