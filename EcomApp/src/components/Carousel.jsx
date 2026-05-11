import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StockImg1 from '../assets/StockImg1.png';
import StockImg2 from '../assets/StockImg2.png';
import StockImg3 from '../assets/StockImg3.jpg';


export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src={StockImg1} className="w-100 h-75"alt="Stock Image 1"/> 
      </SwiperSlide>
      <SwiperSlide>
        <img src={StockImg2} className="w-100 h-75" alt="Stock Image 2"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src={StockImg3} className="w-100 h-75" alt="Stock Image 3"/>
      </SwiperSlide>
    </Swiper>
  );
}