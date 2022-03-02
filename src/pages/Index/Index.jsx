import React, { useState, useEffect } from 'react';
import './../../styles/pages/index.scss';
import Header from './../../components/Header/Header';
import Mask from './../../components/Mask';
import Intro from './../../components/Intro';
import Select from './../../components/Select';
import Info from './../../components/Info';
import Slider from './../../components/Slider/Slider';
import Footer from './../../components/Footer';

export default function Index() {
  const [isDesktop, setIsDesktop] = useState(null);
  
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    }
  }, [])
  
  function resize() {
    setIsDesktop(window.innerWidth >= 768)
  }

  return (
    <>
      <Header isDesktop={isDesktop}/>
      <Mask />
      <Intro />
      <Select isDesktop={isDesktop}/>
      <Info />
      <Slider />
      <Footer />
    </>
  )
}
