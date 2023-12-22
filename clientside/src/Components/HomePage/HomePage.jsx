import React from 'react';
import HeroPage from '../heropage/HeroPage';
import Spons from '../spons/Spons';
import Footer from '../footer/footer';
import Notifications from '../notification/Notifications';

export default function HomePage() {
  return (
    <div>
        <HeroPage />
        <Spons />
        <Notifications />
        <Footer />
    </div>
  )
}
