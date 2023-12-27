import {React,useEffect,useState} from 'react'; 
import './Game.css';
import Image from './back1-removebg.png';
import Img from './background2.png';

function Game({slides}){
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ srcImg, setSrcImg ] = useState(Image);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (windowWidth < 550) {
            setSrcImg(Img);
          
        }
        else {
            setSrcImg(Image);
        }
    }, [windowWidth]);
    let count=0;
    const [currentslide,setcurrentslide]=useState(0);
    const [currentcontent,setcurrentcontent]=useState(0);
    const [currentheading,setcurrentheading]=useState(0);
    const prevslide=()=>{
        const isfirstslide=currentslide===0;
        const moveto=isfirstslide?slides.length-1:currentslide-1;
        setcurrentslide(moveto);
        setcurrentcontent(moveto);
        setcurrentheading(moveto);
    };
    const nextslide=()=>{
        const islastslide=currentslide===4;
        const move=islastslide?0:currentslide+1;
        setcurrentslide(move);
        setcurrentcontent(move);
        setcurrentheading(move);
    }
    return (
        <div className='parentdiv'>
          <img src={srcImg} id='background'/>
          <div className='maindiv'>
            <h1 className='gameheading'>The Games</h1>
           <div className='images'>
              <img src={slides[currentslide].url} className='image'/>
              {/* <div className='buttons'> */}
              <button className='btn btn1' onClick={prevslide}>PREV</button>
              <button className='btn btn2' onClick={nextslide}>NEXT</button>
              {/* </div> */}
           </div>
            {/* <div className='buttons'>
              <button className='btn btn1' onClick={prevslide}>PREV</button>
              <button className='btn btn2' onClick={nextslide}>NEXT</button>
            </div> */}
            <div className='bottom'>
              <div className='heading'>
                <h2>{slides[currentheading].title}</h2>
              </div>
              <div className='content'>
                <p>{slides[currentcontent].content}</p>
              </div>
           </div>
           <div className='line-dot'>
             <div className='line'></div>
           
             <div className='dot'></div>
           </div>
           <div className='line-dot1'>
             <div className='line1'></div>
             <div className='dot1'></div>
           </div>
          </div>
        </div>

    )
}

export default Game;