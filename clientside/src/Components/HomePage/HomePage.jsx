import React from 'react';
import HeroPage from '../heropage/HeroPage';
import Spons from '../spons/Spons';
import Footer from '../footer/footer';
import Notifications from '../notification/Notifications';
import Info from '../Steps/Info';
import Card from '../gamesection/Card';
import Unlock from '../unstop/Unlock';

export default function HomePage() {
  return (
    <div>
      <div className='gradient' id='gradient1'></div>
      <div className='gradient' id='gradient2'></div>
      <div className='gradient' id='gradient3'></div>
      <HeroPage />
      <Unlock />
      <Info />
      <Notifications />
      <Spons />
      <Card />
      <Footer />
    </div>
  )
}
