import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

const Banner = () => {
  return (
    <div className="px-4">
      <Swiper
        className="mt-5 rounded-2xl"
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={banner1}
              alt=""
              className="w-full h-96 rounded-2xl"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
            <div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">
                Destination
              </h1>
              <p className="text-white text-2xl font-bold text-center w-[350px] lg:w-[565px]">
                Explore Europe's hidden gems with our curated tours, showcasing
                charming villages, breathtaking landscapes, and cultural
                treasures off the beaten path.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={banner2}
              alt=""
              className="w-full h-96 rounded-2xl"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
            <div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">
                Safe Travels
              </h1>
              <p className="text-white text-2xl font-bold text-center w-[350px] lg:w-[565px]">
                Embark on worry-free journeys crafted by our travel experts,
                ensuring seamless logistics, comfortable accommodations, and
                memorable experiences tailored to your preferences.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={banner3}
              alt=""
              className="w-full h-96 rounded-2xl"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
            <div className="absolute inset-0 flex flex-col space-y-3 items-center justify-center">
              <h1 className="text-white text-4xl font-bold text-center">
                Travel Pricing
              </h1>
              <p className="text-white text-2xl font-bold text-center w-[350px] lg:w-[565px]">
                We at Travel Tribe affordable packages tailored to your
                interests, with transparent pricing and no hidden fees, making
                unforgettable European adventures accessible to all.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
