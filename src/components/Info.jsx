import React from 'react'
import Picture from './Picture'

import w111w365 from './../assets/img/index/111@365w.webp'
import w111w730 from './../assets/img/index/111@730w.webp'
import j111w365 from './../assets/img/index/111@365w.jpg'
import j111w730 from './../assets/img/index/111@730w.jpg'
import w111w280 from './../assets/img/index/111@280w.webp'
import w111w560 from './../assets/img/index/111@560w.webp'
import j111w280 from './../assets/img/index/111@280w.jpg'
import j111w560 from './../assets/img/index/111@560w.jpg'

import w222w524 from './../assets/img/index/222@524w.webp'
import w222w1048 from './../assets/img/index/222@1048w.webp'
import j222w524 from './../assets/img/index/222@524w.jpg'
import j222w1048 from './../assets/img/index/222@1048w.jpg'
import w222w402 from './../assets/img/index/222@402w.webp'
import w222w804 from './../assets/img/index/222@804w.webp'
import j222w402 from './../assets/img/index/222@402w.jpg'
import j222w804 from './../assets/img/index/222@804w.jpg'
import w222w454 from './../assets/img/index/222@454w.webp'
import w222w908 from './../assets/img/index/222@908w.webp'
import j222w454 from './../assets/img/index/222@454w.jpg'
import j222w908 from './../assets/img/index/222@908w.jpg'
import w222w299 from './../assets/img/index/222@299w.webp'
import w222w598 from './../assets/img/index/222@598w.webp'
import j222w299 from './../assets/img/index/222@299w.jpg'
import j222w598 from './../assets/img/index/222@598w.jpg'


export default function Info() {
  return (
    <section className="info">
        <div className="info-bg1">
          <Picture device='desktop' files={[w111w365, w111w730, j111w365, j111w730, w111w280, w111w560, j111w280, j111w560]} alt='Вид сквозь облака' ext='jpeg'/>
        </div>
        <div className="wave">
          <svg width="146" height="8" viewBox="0 0 146 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M73.0025 0C74.6044 0 82.5231 0.304986 88.6379 3.78626C92.317 5.87958 95.825 6.86475 99.552 6.83516C103.288 6.80551 107.28 5.75605 111.924 3.72188C119.488 0.408582 126.827 0.218675 132.854 1.36977C138.868 2.51826 143.615 5.0093 146 7.11122L145.283 8C143.075 6.05402 138.519 3.63314 132.654 2.51321C126.804 1.3959 119.688 1.58109 112.354 4.79394C107.632 6.86222 103.491 7.96629 99.5605 7.99749C95.6211 8.02876 91.9289 6.98211 88.1064 4.80721C82.2497 1.47285 74.2563 1.17719 73 1.17471C71.7437 1.17719 63.7503 1.47285 57.8936 4.80721C54.0711 6.98211 50.3789 8.02876 46.4395 7.99749C42.509 7.96629 38.3683 6.86222 33.6463 4.79394C26.312 1.58109 19.1964 1.3959 13.3456 2.51321C7.4811 3.63314 2.92499 6.05402 0.716538 8L0 7.11122C2.38543 5.0093 7.13175 2.51826 13.1458 1.36977C19.1735 0.218675 26.5124 0.408582 34.076 3.72188C38.7201 5.75605 42.7121 6.80551 46.448 6.83516C50.175 6.86475 53.683 5.87958 57.3621 3.78626C63.4769 0.304986 71.3956 0 72.9975 0H73.0025Z" fill="#D9C287" />
          </svg>
        </div>
        <div className="info-title">
          <span>Mriya Resort & SPA —</span>
          <br />
          <span>больше чем просто отдых</span>
        </div>
        <div className="info-logo">
          <svg width="62" height="40" viewBox="0 0 62 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.9814 0.00522511C30.9904 0.0041801 31.008 0.00156753 31.0165 0C32.0867 1.82513 32.9651 3.76207 33.6094 5.77268C34.3954 8.23788 34.7969 10.828 34.7279 13.4128C34.6748 15.6716 34.2621 17.9168 33.5568 20.0649C32.9635 21.8618 32.1732 23.5934 31.2284 25.2377C31.3649 25.5005 31.7106 25.4603 31.9475 25.372C32.4361 25.1787 32.8148 24.7999 33.1595 24.4205C33.8462 23.6153 34.3418 22.6712 34.7555 21.7071C35.1278 20.8319 35.421 19.9259 35.6727 19.0105C36.2708 16.9957 37.4073 15.1784 38.7144 13.5361C39.9105 12.0438 41.2776 10.6879 42.7493 9.45846C44.4074 8.07904 46.2058 6.85585 48.1348 5.87092C49.2682 5.30608 50.4499 4.82015 51.6874 4.52284C51.6151 8.29275 51.1223 12.1159 49.6521 15.6241C49.0143 17.1519 48.1857 18.6039 47.1724 19.9212C45.459 22.1633 43.2082 23.9753 40.7178 25.3255C40.1718 25.6092 39.6253 25.9708 39.3188 26.5142C39.1234 26.8413 39.1207 27.2672 39.3263 27.5906C39.6428 28.1105 40.2137 28.4146 40.7725 28.6246C41.7253 28.9517 42.7546 28.9042 43.7483 28.8666C46.7406 28.7291 49.7722 29.1127 52.5919 30.1268C54.6977 30.874 56.6682 31.9645 58.4585 33.2823C59.7236 34.2129 60.8979 35.2584 62 36.3703C60.148 37.4556 58.1967 38.3909 56.1429 39.0445C53.986 39.7358 51.7054 40.1099 49.4339 39.9714C48.2128 39.902 47.0046 39.6668 45.8404 39.3011C44.375 38.8684 42.9453 38.3229 41.4666 37.9326C40.3316 37.639 39.1127 37.4545 37.9645 37.7837C37.0632 38.115 36.1741 38.4802 35.2808 38.8329C34.5383 39.1459 33.7666 39.3983 32.9683 39.5294C30.9294 39.8764 28.7752 39.7013 26.8658 38.893C26.058 38.5737 25.256 38.2393 24.4413 37.9389C23.6818 37.5972 22.8187 37.5611 22.0003 37.6499C20.9455 37.7722 19.9274 38.0894 18.9214 38.4123C17.7455 38.7942 16.5766 39.1992 15.3821 39.5237C12.9894 40.1585 10.4481 40.1245 8.03414 39.6188C5.1826 39.0267 2.49464 37.8323 0 36.3703C1.45737 34.8994 3.04434 33.543 4.79542 32.4186C6.56456 31.2659 8.50259 30.3599 10.5362 29.7595C12.9767 29.0317 15.5451 28.7615 18.0892 28.8592C19.0797 28.8995 20.0978 28.9575 21.0613 28.68C21.6487 28.4877 22.2425 28.1936 22.6121 27.6878C22.8474 27.3727 22.9027 26.9343 22.7168 26.5837C22.4236 26.0011 21.8484 25.6207 21.2806 25.3245C18.5905 23.8682 16.1819 21.8644 14.4245 19.3757C13.1849 17.641 12.2682 15.6951 11.6356 13.6715C10.711 10.713 10.3716 7.60826 10.3126 4.52284C12.2581 4.99833 14.0665 5.89913 15.7602 6.93788C18.41 8.58744 20.8148 10.6268 22.8347 12.988C24.4254 14.8779 25.8142 17.0087 26.4399 19.4081C26.7304 20.415 27.0825 21.4067 27.5366 22.3535C28.0151 23.3264 28.585 24.2904 29.4316 24.9989C29.7407 25.2367 30.1093 25.487 30.5231 25.4274C30.6415 25.4216 30.7042 25.3177 30.7716 25.2372C29.7089 23.3865 28.8373 21.4245 28.2302 19.3825C27.5791 17.1947 27.2408 14.9145 27.2663 12.6338C27.2865 10.3086 27.6837 7.99126 28.3901 5.77321C29.0343 3.76468 29.9102 1.82826 30.9814 0.00522511Z" fill="#D9C287" />
          </svg>
        </div>
        <div className="info-text">В окружении необычного природного ландшафта курорт становится по-настоящему уникальным. Это место идеально для тех, кто больше гор любит только море.</div>
        <button className="info-button">О комплексе</button>
        <div className="info-bg2">
          <Picture device='all' files={[w222w524, w222w1048, j222w524, j222w1048, w222w402, w222w804, j222w402, j222w804, w222w454, w222w908, j222w454, j222w908, w222w299, w222w598, j222w299, j222w598]} alt='Вид сквозь облака' ext='jpeg'/>
        </div>
      </section>
  )
}