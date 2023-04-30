import React from "react";
import Header from "../Shared/Header";
import CardDetails from "../Components/CardDetails";
import CardSlider from "../Components/CardSlider/CardSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
const Main = () => {
  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center"
      style={{ backgroundImage: "url('Rectangle 1.png')" }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="mt-4">
          <Header />
        </div>
        <div className="flex w-[81%] mx-auto justify-between mt-32 gap-8">
          <div className="w-[45%] bg-green-400 text-start">
            <CardDetails />
          </div>
          <div className="w-[65%]">
            <CardSlider />
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button className="rounded-full">
            <ChevronLeftIcon className="w-4" />
          </button>
          <button className="rounded-full">
            <ChevronRightIcon className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
