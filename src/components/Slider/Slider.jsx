import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slides from './Slides'
import Picture from './../Picture'

import wAllinclusivew1392 from './../../assets/img/index/Allinclusive@1392w.webp'
import wAllinclusivew2784 from './../../assets/img/index/Allinclusive@2784w.webp'
import jAllinclusivew1392 from './../../assets/img/index/Allinclusive@1392w.jpg'
import jAllinclusivew2784 from './../../assets/img/index/Allinclusive@2784w.jpg'
import wAllinclusivew1067 from './../../assets/img/index/Allinclusive@1067w.webp'
import wAllinclusivew2134 from './../../assets/img/index/Allinclusive@2134w.webp'
import jAllinclusivew1067 from './../../assets/img/index/Allinclusive@1067w.jpg'
import jAllinclusivew2134 from './../../assets/img/index/Allinclusive@2134w.jpg'

const IndexSlider = () => {
  return (
    <section className="slider">
      <div className="slider-wrap">
        <div className="slider-bg">
          <Picture device='desktop' files={[wAllinclusivew1392, wAllinclusivew2784, jAllinclusivew1392, jAllinclusivew2784, wAllinclusivew1067, wAllinclusivew2134, jAllinclusivew1067, jAllinclusivew2134]} alt='Фон' ext='jpeg'/>
        </div>
        <div className="slider-head">
          <div className="slider-title">Все включено</div>
          <div className="slider-button">
            <button className="slider-button_prev" aria-label="Пролистнуть слайд назад">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875002 1.52751 2.01451e-07 1.78641 1.90135e-07C2.04531 1.78818e-07 2.26537 0.0875002 2.4466 0.2625L7.72816 5.3625C7.90939 5.5375 8 5.75 8 6C8 6.25 7.90939 6.4625 7.72816 6.6375Z" fill="#fff" />
              </svg>
            </button>
            <button className="slider-button_next" aria-label="Пролистнуть слайд вперёд">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875002 1.52751 2.01451e-07 1.78641 1.90135e-07C2.04531 1.78818e-07 2.26537 0.0875002 2.4466 0.2625L7.72816 5.3625C7.90939 5.5375 8 5.75 8 6C8 6.25 7.90939 6.4625 7.72816 6.6375Z" fill="#fff" />
              </svg>
            </button>
          </div>
        </div>
        <div className="slider-inner">
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.slider-button_next',
              prevEl: '.slider-button_prev',
            }}
          >
            <SwiperSlide><Slides /></SwiperSlide>
            <SwiperSlide><Slides /></SwiperSlide>
            <SwiperSlide><Slides /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default IndexSlider;
