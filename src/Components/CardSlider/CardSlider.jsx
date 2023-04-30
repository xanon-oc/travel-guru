import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/virtual";
import { useEffect, useState } from "react";
const CardSlider = () => {
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5010/categories")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);
  console.log(destination);
  return (
    <div>
      <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
        {destination.map((places, index) => (
          <SwiperSlide key={places.id} virtualIndex={index}>
            <div className="rounded-[20px] bg-gradient-to-b from-transparent to-gray-600 cursor-pointer">
              <img
                src={places.image_link}
                className="w-[277px] h-[350px] rounded-[20px] object-cover mix-blend-overlay relative  hover:border-[#F9A51A] hover:border-[5px]"
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
  );
};

export default CardSlider;
