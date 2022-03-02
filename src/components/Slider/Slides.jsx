import React from 'react';
import Picture from './../Picture'

import wPicW560 from './../../assets/img/index/pic@560w.webp'
import wPicW1120 from './../../assets/img/index/pic@1120w.webp'
import jPicW560 from './../../assets/img/index/pic@560w.jpg'
import jPicW1120 from './../../assets/img/index/pic@1120w.jpg'
import wPicW430 from './../../assets/img/index/pic@430w.webp'
import wPicW860 from './../../assets/img/index/pic@860w.webp'
import jPicW430 from './../../assets/img/index/pic@430w.jpg'
import jPicW860 from './../../assets/img/index/pic@860w.jpg'
import wPicW700 from './../../assets/img/index/pic@700w.webp'
import wPicW1400 from './../../assets/img/index/pic@1400w.webp'
import jPicW700 from './../../assets/img/index/pic@700w.jpg'
import jPicW1400 from './../../assets/img/index/pic@1400w.jpg'
import wPicW461 from './../../assets/img/index/pic@461w.webp'
import wPicW922 from './../../assets/img/index/pic@922w.webp'
import jPicW461 from './../../assets/img/index/pic@461w.jpg'
import jPicW922 from './../../assets/img/index/pic@922w.jpg'

import wCooW260 from './../../assets/img/index/coo@260w.webp'
import wCooW520 from './../../assets/img/index/coo@520w.webp'
import jCooW260 from './../../assets/img/index/coo@260w.jpg'
import jCooW520 from './../../assets/img/index/coo@520w.jpg'
import wCooW200 from './../../assets/img/index/coo@200w.webp'
import wCooW400 from './../../assets/img/index/coo@400w.webp'
import jCooW200 from './../../assets/img/index/coo@200w.jpg'
import jCooW400 from './../../assets/img/index/coo@400w.jpg'
import wCooW700 from './../../assets/img/index/coo@700w.webp'
import wCooW1400 from './../../assets/img/index/coo@1400w.webp'
import jCooW700 from './../../assets/img/index/coo@700w.jpg'
import jCooW1400 from './../../assets/img/index/coo@1400w.jpg'
import wCooW461 from './../../assets/img/index/coo@461w.webp'
import wCooW922 from './../../assets/img/index/coo@922w.webp'
import jCooW461 from './../../assets/img/index/coo@461w.jpg'
import jCooW922 from './../../assets/img/index/coo@922w.jpg'

import wWW260 from './../../assets/img/index/w@260w.webp'
import wWW520 from './../../assets/img/index/w@520w.webp'
import jWW260 from './../../assets/img/index/w@260w.jpg'
import jWW520 from './../../assets/img/index/w@520w.jpg'
import wWW200 from './../../assets/img/index/w@200w.webp'
import wWW400 from './../../assets/img/index/w@400w.webp'
import jWW200 from './../../assets/img/index/w@200w.jpg'
import jWW400 from './../../assets/img/index/w@400w.jpg'
import w1W700 from './../../assets/img/index/1@700w.webp'
import w1W1400 from './../../assets/img/index/1@1400w.webp'
import j1W700 from './../../assets/img/index/1@700w.jpg'
import j1W1400 from './../../assets/img/index/1@1400w.jpg'
import w1W461 from './../../assets/img/index/1@461w.webp'
import w1W922 from './../../assets/img/index/1@922w.webp'
import j1W461 from './../../assets/img/index/1@461w.jpg'
import j1W922 from './../../assets/img/index/1@922w.jpg'

const Slides = () => {
    return (
      <div className="slider-slide">
        <div className="slide__item_main">
          <div className="slide__img">
            <Picture device='all' files={[wPicW560, wPicW1120, jPicW560, jPicW1120, wPicW430, wPicW860, jPicW430, jPicW860, wPicW700, wPicW1400, jPicW700, jPicW1400, wPicW461, wPicW922, jPicW461, jPicW922]} alt='Тренажерный зал' ext='jpeg'/>
          </div>
          <div className="slide__text">Заниматесь в тренажерном зале и посещайте групповые тренировки</div>
          <a className="slide__link">Читать больше</a>
        </div>
        <div className="slide__item_second">
          <div className="slide__title">Оздоровление</div>
          <div className="slide__desc">Mriya Resort — это маленький город со множеством возможностей, каждый найдет себе занятие по вкусу</div>
        </div>
        <div className="slide__item_third">
          <div className="slide__img">
            <Picture device='all' files={[wCooW260, wCooW520, jCooW260, jCooW520, wCooW200, wCooW400, jCooW200, jCooW400, wCooW700, wCooW1400, jCooW700, jCooW1400, wCooW461, wCooW922, jCooW461, jCooW922]} alt='Шведская линия' ext='jpeg'/>
          </div>
          <div className="slide__text">Питаться в ресторане шведской линии согласно выбранному варианту</div>
          <a className="slide__link">Читать больше</a>
        </div>
        <div className="slide__item_fourth">
          <div className="slide__img">
            <Picture device='all' files={[wWW260, wWW520, jWW260, jWW520, wWW200, wWW400, jWW200, jWW400, w1W700, w1W1400, j1W700, j1W1400, w1W461, w1W922, j1W461, j1W922]} alt='Территория комплекса' ext='jpeg'/>
          </div>
          <div className="slide__text">Исследовать все общедоступные зоны и территории комплекса</div>
          <a className="slide__link">Читать больше</a>
        </div>
      </div>
    );
}

export default Slides;
