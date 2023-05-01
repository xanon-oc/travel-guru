import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { useEffect, useState } from "react";
import {
  ArrowLongRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
const CardSlider = () => {
  const [destination, setDestination] = useState([]);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5010/categories")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  const onClickHandler = (id) => {
    const findData = destination.find((data) => data.id === id);
    setCardData(findData);
  };

  return (
    <>
      <div className="flex w-[81%] mx-auto justify-between mt-32 gap-8">
        <div className="grid grid-cols-2 gap-8">
          {cardData.id ? (
            <div className="text-start">
              <h2 className="text-white text-8xl uppercase mb-7">
                {cardData.place_name}
              </h2>
              <p className="text-base font-normal  text-white w-[80%]">
                <small>{cardData.description}</small>
              </p>
              <button className="bg-[#F9A51A] rounded font-medium gap-2 mt-7">
                Booking <ArrowLongRightIcon className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <div className="text-start">
              <h2 className="text-white text-8xl uppercase mb-7">Welcome</h2>
              <p className="text-base font-normal  text-white w-[80%]">
                <small>
                  Looking for an unforgettable adventure? Look no further than
                  our travel agency! We offer personalized and affordable travel
                  packages to destinations around the globe. From exotic beaches
                  to breathtaking mountains, our expertly curated itineraries
                  cater to all types of travelers. Let us take care of the
                  details so you can focus on making unforgettable memories.
                  Book your dream vacation today!
                </small>
              </p>
              <button className="bg-[#F9A51A] rounded font-medium gap-2 mt-7">
                Start Booking <ArrowLongRightIcon className="h-6 w-6" />
              </button>
            </div>
          )}
          <div className="w-screen">
            <Swiper
              modules={[Virtual]}
              spaceBetween={-600}
              slidesPerView={3}
              virtual
            >
              {destination.map((places) => (
                <SwiperSlide key={places.id}>
                  <div
                    onClick={() => onClickHandler(places.id)}
                    className="rounded-[20px] bg-gradient-to-b from-transparent to-gray-800 cursor-pointer w-[240px]"
                  >
                    <img
                      src={places.image_link}
                      className="w-[240px] h-[350px] rounded-[20px] object-cover mix-blend-overlay relative  hover:border-[#F9A51A] hover:border-[5px]"
                      alt=""
                    />
                    <p className="font-normal text-2xl uppercase text-white absolute bottom-0 p-4 mx-5">
                      {places.place_name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
    </>
  );
};

export default CardSlider;
