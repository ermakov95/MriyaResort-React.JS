import React, { useState } from 'react';
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Picture from './../Picture'

import wAntistressW420 from './../../assets/img/index/antistress@420w.webp'
import wAntistressW840 from './../../assets/img/index/antistress@840w.webp'
import jAntistressW420 from './../../assets/img/index/antistress@420w.jpg'
import jAntistressW840 from './../../assets/img/index/antistress@840w.jpg'
import wAntistressW322 from './../../assets/img/index/antistress@322w.webp'
import wAntistressW644 from './../../assets/img/index/antistress@644w.webp'
import jAntistressW322 from './../../assets/img/index/antistress@322w.jpg'
import jAntistressW644 from './../../assets/img/index/antistress@644w.jpg'

function NavSlider({ isDesktop }) {
  const [ swiper, setSwiper ] = useState(null);
  const [ index, setIndex ] = useState(1)

  const slideTo = (index) => {
    return () => {
      swiper && swiper.slideTo(index)
    }
  };
  const slideChange = () => {
    swiper && setIndex(swiper.activeIndex)
  }

  const slides = [
    {
      id: 0,
      title: 'Антистресс',
      text: '10-21 дня',
      files: [wAntistressW420, wAntistressW840, jAntistressW420, jAntistressW840, wAntistressW322, wAntistressW644, jAntistressW322, jAntistressW644]
    },
    {
      id: 1,
      title: 'Йога',
      text: '7-14 дней',
      files: [wAntistressW420, wAntistressW840, jAntistressW420, jAntistressW840, wAntistressW322, wAntistressW644, jAntistressW322, jAntistressW644]
    },
    {
      id: 2,
      title: 'Медитация',
      text: '14-21 дня',
      files: [wAntistressW420, wAntistressW840, jAntistressW420, jAntistressW840, wAntistressW322, wAntistressW644, jAntistressW322, jAntistressW644]
    }
  ]
  return (
    <div className="nav-slider">
      <div className="nav-slider-inner">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={slideChange}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: isDesktop ? 3000 : 0 ,
          disableOnInteraction: false
        }}
        navigation
      >
        {slides.map(({ id, title, text, files}) => {
        return (
          <SwiperSlide key={id}>
            <div className="nav-slide">
              <div className="nav-slide__bg">
                <Picture device='desktop' files={files} alt={title} ext='jpeg'/>
              </div>
              <div className="nav-slide__content">
                <svg className="nav-slide__svg" width="360" height="306" viewBox="0 0 360 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M360 306H0L0.000133753 0C181.528 0 332.075 132.517 360 306Z" fill="black" fillOpacity="0.48" />
                </svg>
                <div className="nav-slide__title">{title}</div>
                <div className="nav-slide__text">{text}</div>
                <button className="nav-slide__button">Подробнее</button>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      </Swiper>
      </div>
      <div className="nav-slider-buttons">
        <button className={(index === 1 || index === 4) ? 'nav-btn-active' : ''} onClick={slideTo(1)}></button>
        <button className={index === 2 ? 'nav-btn-active' : ''} onClick={slideTo(2)}></button>
        <button className={index === 3 ? 'nav-btn-active' : ''} onClick={slideTo(3)}></button>
      </div>
    </div>
  )
}

export default NavSlider;
