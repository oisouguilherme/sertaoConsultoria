import { Swiper, SwiperSlide } from 'swiper/react';
import block from '../../assets/block.png'
import "swiper/css";

import { Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Projetos(){
  return (
    <div className="px-24 py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-verde">Alguns projetos</h2>
      
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          className='w-full'
          spaceBetween={-300}
          slidesPerView={3}
          
        >
          <SwiperSlide>
            <div className='w-96'>
              <img src={block} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img src={block} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img src={block} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img src={block} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img src={block} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      
    </div>
  );
}