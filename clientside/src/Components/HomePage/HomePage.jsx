import React from 'react';
import HeroPage from '../heropage/HeroPage';
import Spons from '../spons/Spons';
import Footer from '../footer/footer';
// import Notifications from '../notification/Notifications';
import Info from '../Steps/Info';
import Card from '../gamesection/Card';
import Unlock from '../unstop/Unlock';

export default function HomePage() {

    // const [ scroll, setScroll ] = useState(0);

    // useEffect(() => {
    //   const progressScrollHandler = () => {
    //     const totalScroll = document.documentElement.scrollTop;
    //     const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     const scroll = totalScroll / windowHeight * 100;
    //     setScroll(scroll);
    //   }

    //   window.addEventListener("scroll", progressScrollHandler);

    //   return () => window.removeEventListener("scroll", progressScrollHandler);
    // });

  return (
    <div>
      {/* <div className='vertical-bar'>
        <div className='vertical-inner-bar' style={{ height : scroll + "%" }}></div>
      </div> */}
      <div className='gradient' id='gradient1'></div>
      <div className='gradient' id='gradient2'></div>
      <div className='gradient' id='gradient3'></div>
      <HeroPage />
      <Unlock />
      <Info />
      {/* <Notifications /> */}
      <Spons />
      <Card />
      <Footer />
    </div>
  )
}
