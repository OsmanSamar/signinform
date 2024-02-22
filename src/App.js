import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <div
        className=" bg-[#ec9494] min-h-screen mobile-image md:bg-image p-8  
      flex flex-col items-center    md:flex-row  "
      >
        <div className="flex flex-col mb-32 space-y-12 pr-8 md:pl-10 md:w-1/2">
          <h1
            className="text-white max-w-md text-2xl font-bold text-center 
           md:text-5xl md:text-left"
          >
            Learn to code by watching others
          </h1>
          <p className="text-white max-w-sm text-center  md:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-[450px] mx-auto md:mt-0 s">
          {/* className="flex flex-col items-center w-[350px] md:w-[450px] mx-auto " */}
          <a
            href="#Try"
            className="p-7 px-2 mb-30  text-center text-white bg-[#6d28d9] 
            rounded  self-baseline  shadow-2xl w-full  md:w-[380px]    md:ml-8  "
          >
            Try it free 7 days then $20/mo. thereafter
          </a>
          <div className="sm:p-4"></div>
          <SignIn />
        </div>
      </div>
    </>
  );
}

export default App;
