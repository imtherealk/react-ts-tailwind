import React from "react";
import RootPage from "./Root";

const HomePage: React.FC = () => {
  return (
    <RootPage header="home">
      <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:items-center lg:justify-between">
              <div className="mt-8 flex lg:flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </RootPage>
  );
};
export default HomePage;
