import React, { useState, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Picture from './Picture'

import w1W360 from './../assets/img/index/1@360w.webp'
import w1W720 from './../assets/img/index/1@720w.webp'
import j1W360 from './../assets/img/index/1@360w.jpg'
import j1W720 from './../assets/img/index/1@720w.jpg'
import w1W276 from './../assets/img/index/1@276w.webp'
import w1W552 from './../assets/img/index/1@552w.webp'
import j1W276 from './../assets/img/index/1@276w.jpg'
import j1W552 from './../assets/img/index/1@552w.jpg'
import w1W700 from './../assets/img/index/1@700w.webp'
import w1W1400 from './../assets/img/index/1@1400w.webp'
import j1W700 from './../assets/img/index/1@700w.jpg'
import j1W1400 from './../assets/img/index/1@1400w.jpg'
import w1W461 from './../assets/img/index/1@461w.webp'
import w1W922 from './../assets/img/index/1@922w.webp'
import j1W461 from './../assets/img/index/1@461w.jpg'
import j1W922 from './../assets/img/index/1@922w.jpg'

import w2W360 from './../assets/img/index/2@360w.webp'
import w2W720 from './../assets/img/index/2@720w.webp'
import j2W360 from './../assets/img/index/2@360w.jpg'
import j2W720 from './../assets/img/index/2@720w.jpg'
import w2W276 from './../assets/img/index/2@276w.webp'
import w2W552 from './../assets/img/index/2@552w.webp'
import j2W276 from './../assets/img/index/2@276w.jpg'
import j2W552 from './../assets/img/index/2@552w.jpg'
import w2W700 from './../assets/img/index/2@700w.webp'
import w2W1400 from './../assets/img/index/2@1400w.webp'
import j2W700 from './../assets/img/index/2@700w.jpg'
import j2W1400 from './../assets/img/index/2@1400w.jpg'
import w2W461 from './../assets/img/index/2@461w.webp'
import w2W922 from './../assets/img/index/2@922w.webp'
import j2W461 from './../assets/img/index/2@461w.jpg'
import j2W922 from './../assets/img/index/2@922w.jpg'

import w3W360 from './../assets/img/index/3@360w.webp'
import w3W720 from './../assets/img/index/3@720w.webp'
import j3W360 from './../assets/img/index/3@360w.jpg'
import j3W720 from './../assets/img/index/3@720w.jpg'
import w3W276 from './../assets/img/index/3@276w.webp'
import w3W552 from './../assets/img/index/3@552w.webp'
import j3W276 from './../assets/img/index/3@276w.jpg'
import j3W552 from './../assets/img/index/3@552w.jpg'

import w4W360 from './../assets/img/index/4@360w.webp'
import w4W720 from './../assets/img/index/4@720w.webp'
import j4W360 from './../assets/img/index/4@360w.jpg'
import j4W720 from './../assets/img/index/4@720w.jpg'
import w4W276 from './../assets/img/index/4@276w.webp'
import w4W552 from './../assets/img/index/4@552w.webp'
import j4W276 from './../assets/img/index/4@276w.jpg'
import j4W552 from './../assets/img/index/4@552w.jpg'

import w5W360 from './../assets/img/index/5@360w.webp'
import w5W720 from './../assets/img/index/5@720w.webp'
import j5W360 from './../assets/img/index/5@360w.jpg'
import j5W720 from './../assets/img/index/5@720w.jpg'
import w5W276 from './../assets/img/index/5@276w.webp'
import w5W552 from './../assets/img/index/5@552w.webp'
import j5W276 from './../assets/img/index/5@276w.jpg'
import j5W552 from './../assets/img/index/5@552w.jpg'

const IndexSelect = ({isDesktop}) => {
  const [ select, setSelect ] = useState({
    spec: true,
    rest: false,
  });

  function changeSelect(type) {
    return () => {
      setSelect({
        spec: type === 'spec',
        rest: type === 'rest',
      })
    }
  }

  const specSlides = [
    {
      id: 0,
      files: [w1W360, w1W720, j1W360, j1W720, w1W276, w1W552, j1W276, j1W552, w1W700, w1W1400, j1W700, j1W1400, w1W461, w1W922, j1W461, j1W922],
      text: ['-20%', 'Для тех, кто рядом']
    },
    {
      id: 1,
      files: [w2W360, w2W720, j2W360, j2W720, w2W276, w2W552, j2W276, j2W552, w2W700, w2W1400, j2W700, j2W1400, w2W461, w2W922, j2W461, j2W922],
      text: ['-10%', 'Раннее бронирование']
    }
  ]

  const restSlides = [
    {
      id: 0,
      files: [w3W360, w3W720, j3W360, j3W720, w3W276, w3W552, j3W276, j3W552],
      text: 'Семейный отдых',
    },
    {
      id: 1,
      files: [w4W360, w4W720, j4W360, j4W720, w4W276, w4W552, j4W276, j4W552],
      text: 'Оздоровление',
    },
    {
      id: 2,
      files: [w5W360, w5W720, j5W360, j5W720, w5W276, w5W552, j5W276, j5W552],
      text: 'Релакс и красота',
    },
    {
      id: 3,
      files: [w3W360, w3W720, j3W360, j3W720, w3W276, w3W552, j3W276, j3W552],
      text: 'Семейный отдых',
    },
    {
      id: 4,
      files: [w4W360, w4W720, j4W360, j4W720, w4W276, w4W552, j4W276, j4W552],
      text: 'Оздоровление',
    },
    {
      id: 5,
      files: [w5W360, w5W720, j5W360, j5W720, w5W276, w5W552, j5W276, j5W552],
      text: 'Релакс и красота',
    },
  ]

  const [ slides, setSlides ] = useState(specSlides)
  useEffect(() => {
    if (select.spec) {
      setSlides(specSlides)
    } else if (select.rest) {
      setSlides(restSlides)
    }
  }, [select])

  return (
    <section className="select">
      <div className="select-title">Выберите свой отдых</div>
      <form className="select-form">
        <select className="select-form__main">
          <option>Семейный отдых</option>
          <option>Одинокий отдых</option>
        </select>
        <input className="select-form__date" type="date" placeholder="пт, 8 мая — вс, 17 мая"/>
        <input className="select-form__persons" placeholder="2 взрослых  •  без детей  •  1 номер"/>
        <button className="select-form__button">Найти</button>
      </form>
      <div className="select-offers">
        <div className="offers-category">
          <div className="offers-radio">
            <label className="offers-radio__item spec" onClick={changeSelect('spec')}>
              <input className="radio" type="radio" name="offers" value="spec" defaultChecked/>
              <div>Спецпредложения</div>
            </label>
            <label className="offers-radio__item playbill">
              <input className="radio" type="radio" name="offers" value="playbill" disabled="disabled"/>
              <div>Афиша</div>
            </label>
            <label className="offers-radio__item rest" onClick={changeSelect('rest')}>
              <input className="radio" type="radio" name="offers" value="rest"/>
              <div>Категории отдыха</div>
            </label>
          </div>
          <div className="offers-button">
            <button className="offers-button__btn offers-button_prev">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="#3D3C3C" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875002 1.52751 2.01451e-07 1.78641 1.90135e-07C2.04531 1.78818e-07 2.26537 0.0875002 2.4466 0.2625L7.72816 5.3625C7.90939 5.5375 8 5.75 8 6C8 6.25 7.90939 6.4625 7.72816 6.6375Z" fill="#3D3C3C" opacity="0.16" />
              </svg>
            </button>
            <button className="offers-button__btn offers-button_next">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="#3D3C3C" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.72816 6.6375L2.4466 11.7375C2.26537 11.9125 2.04531 12 1.78641 12C1.52751 12 1.30744 11.9125 1.12621 11.7375L0.271845 10.875C0.0906148 10.7 -6.61135e-08 10.4875 -7.70413e-08 10.2375C-8.79692e-08 9.9875 0.0906148 9.775 0.271845 9.6L4 6L0.271844 2.4C0.0906145 2.225 -4.36567e-07 2.0125 -4.47495e-07 1.7625C-4.58423e-07 1.5125 0.0906144 1.3 0.271844 1.125L1.12621 0.2625C1.30744 0.0875002 1.52751 2.01451e-07 1.78641 1.90135e-07C2.04531 1.78818e-07 2.26537 0.0875002 2.4466 0.2625L7.72816 5.3625C7.90939 5.5375 8 5.75 8 6C8 6.25 7.90939 6.4625 7.72816 6.6375Z" fill="#3D3C3C" opacity="0.16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`offers-result ${select.spec ? 'offers-spec' : 'offers-rest'}`}>
          {
            <Swiper
              direction={isDesktop ? 'horizontal' : 'vertical'}
              modules={[Navigation]}
              slidesPerView={isDesktop ? 3 : slides.length}
              navigation={{
                nextEl: '.offers-button_next',
                prevEl: '.offers-button_prev',
              }}
            >
              {slides.map(({ id, files, text }) => {
                return (
                  <SwiperSlide key={id}>
                    <div className="offers-item">
                      <div className="offers-item__img">
                        <Picture device='desktop' files={files} alt={Array.isArray(text) ? text.join(' ') : text} ext='jpeg'/>
                      </div>
                      { select.spec && 
                        <>
                          <svg className="offers-item__svg_spec" width="360" height="306" viewBox="0 0 360 306" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M360 306H0L0.000133753 0C181.528 0 332.075 132.517 360 306Z" fill="black" fillOpacity="0.48" />
                          </svg>
                          <div className="offers-item__content_spec">
                            <div>{text[0]}</div>
                            <div>{text[1]}</div>
                          </div>
                        </>
                      }
                      { select.rest && 
                        <>
                          <svg className="offers-item__svg_rest" width="360" height="72" viewBox="0 0 360 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M360 34.1338V64C360 68.4183 356.418 72 352 72H8C3.58173 72 0 68.4183 0 64V4.93753C32.8906 1.67195 66.2501 0 100 0C189.933 0 277.094 11.8718 360 34.1338Z" fill="black" fillOpacity="0.56" />
                          </svg>
                          <div className="offers-item__content_rest">{text}</div>
                        </>
                      }
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          }
        </div>
      </div>
    </section>
  );
}

export default IndexSelect;
