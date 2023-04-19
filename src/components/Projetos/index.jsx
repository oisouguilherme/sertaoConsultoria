import { Swiper, SwiperSlide } from "swiper/react";
import projeto1 from "../../assets/projetos/projeto-1.jpg";
import projeto2 from "../../assets/projetos/projeto-2.jpg";
import projeto3 from "../../assets/projetos/projeto-3.jpg";
import projeto4 from "../../assets/projetos/projeto-4.jpg";
import projeto5 from "../../assets/projetos/projeto-5.jpg";
import projeto6 from "../../assets/projetos/projeto-6.jpg";

import "swiper/css";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Projetos() {
  return (
    <div className=" md:px-24 px-4 text-center py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-verde">Alguns projetos</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        className="w-full"
        spaceBetween={70}
        slidesPerView={3}
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="w-96 relative cursor-pointer hover:scale-95 duration-300">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Inventário Florestal
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto5}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-96 relative hover:scale-95 duration-300 cursor-pointer">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Inventário Subestação
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-96 relative hover:scale-95 duration-300 cursor-pointer">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Inventário Florestal
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto4}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-96 relative hover:scale-95 duration-300 cursor-pointer">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Inventário Subestação
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto3}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-96 relative hover:scale-95 duration-300 cursor-pointer">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Inventário Florestal
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto6}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-96 relative hover:scale-95 duration-300 cursor-pointer">
            <p className="absolute font-bold w-full text-2xl bg-black py-4 text-white bottom-0 bg-opacity-40 text-center rounded">
              Invetário Fotovoltaico
            </p>
            <img
              className="h-96 mx-auto w-full object-cover"
              src={projeto1}
              alt=""
            />
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}
