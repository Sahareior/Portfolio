
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='flex justify-center'>
           <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate neque quis nulla!</p>
           {/* <img className='w-14 h-14 rounded-full' src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-1200x800.jpg" alt="" /> */}
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='flex justify-center'>
           <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate neque quis nulla!</p>
           {/* <img className='w-14 h-14 rounded-full' src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-1200x800.jpg" alt="" /> */}
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className='flex justify-center'>
           <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptate neque quis nulla!</p>
           {/* <img className='w-14 h-14 rounded-full' src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-1200x800.jpg" alt="" /> */}
           </div>
        </SwiperSlide>
 
      </Swiper>
    </>
  );
}
