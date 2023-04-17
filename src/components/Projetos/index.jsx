import { Swiper, SwiperSlide } from 'swiper/react';
import projeto1 from '../../assets/projetos/projeto-1.jpg'
import projeto2 from '../../assets/projetos/projeto-2.jpg'
import projeto3 from '../../assets/projetos/projeto-3.jpg'
import projeto4 from '../../assets/projetos/projeto-4.jpg'
import projeto5 from '../../assets/projetos/projeto-5.jpg'
import projeto6 from '../../assets/projetos/projeto-6.jpg'



import "swiper/css";
import { Navigation, Pagination} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Projetos(){
  return (
    <div className="md:px-24 px-4 text-center py-12 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-verde">Alguns projetos</h2>
      
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          className='w-full'
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
          }}
          
        >
          <SwiperSlide>
            <div className='w-96'>
              <img className='h-96 mx-auto w-80' src={projeto1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img className='h-96 mx-auto w-80' src={projeto2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img className='h-96 mx-auto w-80' src={projeto3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96'>
              <img className='h-96 mx-auto w-80' src={projeto4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-96 '>
              <img className='h-96 mx-auto w-80' src={projeto5} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      
    </div>
  );
}