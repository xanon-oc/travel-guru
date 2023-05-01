import * as React from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
  const { place_name, description } = useLoaderData();
  return (
    <div className="flex w-[81%] mx-auto justify-between mt-32 gap-8">
      <div className="grid grid-cols-2">
        <div className="text-start">
          <h2 className="text-white text-8xl uppercase mb-7">{place_name}</h2>
          <p className="text-base font-normal  text-white w-[80%]">
            <small>{description}</small>
          </p>
        </div>
      </div>
      <div className="">
        <div className="hero">
          <div className="hero-content  flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 ">
              <div className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Origin</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Dhaka"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Destination</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Cox's Bazar"
                    className="input input-bordered"
                  />
                </div>
                <div className="w-[350px]">
                  <RangeDatePicker
                    startDate={new Date(2020, 0, 1)}
                    endDate={new Date(2020, 1, 1)}
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-none bg-[#F9A51A]">
                    Start Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
