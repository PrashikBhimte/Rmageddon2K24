import React from 'react';
import HeroPage from '../heropage/HeroPage';
import Spons from '../spons/Spons';
import Footer from '../footer/footer';
import Notifications from '../notification/Notifications';
import Info from '../Steps/Info';
import Game from '../gamesection/Game';

export default function HomePage() {
  return (
    <div>
      <div className='gradient' id='gradient1'></div>
      <div className='gradient' id='gradient2'></div>
      <div className='gradient' id='gradient3'></div>
      <HeroPage />
      <Info />
      <Notifications />
      <Spons />
      <Game />
      <Footer />
    </div>
  )
}
