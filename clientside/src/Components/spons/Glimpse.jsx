import React, { useEffect, useState } from 'react';
import './Glimpse.css';

function Glimpse(){
  
    const [currentImage,setcurrentImage]=useState(0);
    const [nextImage,setnextImage]=useState(1);
    const [prevImage,setprevImage]=useState(2);
    const [style,setstyle]=useState(1);
    const [brightness,setbrightness]=useState(130);
    const [transform,setTransform]=useState(0);
    useEffect(()=>{
        const styletime=setInterval(()=>{
        
                setstyle((i)=>i===1?1.07:1)
                setbrightness((b)=>b===130?150:130)
 
        },1000)
        return ()=>clearInterval(styletime)
    },[style])

    
    useEffect(()=>{
        const time=setInterval(()=>{
            setcurrentImage((i)=>(i+1)%Images.length)
            setTransform((t)=>t===0?0.5:0)
            setnextImage((j)=>(j+1)%Images.length)
            setTransform((t)=>t===0?0.5:0)
            setprevImage((k)=>(k+1)%Images.length)
            setTransform((t)=>t===0?0.5:0)
            
        },2000);
        return ()=>clearInterval(time);
    },[currentImage])

  return (
    <div className="blackdiv">
      <p className="blackdiv-heading1">Last year Glimpses...</p>
      <div className="blackdiv-inner">
        <div className="images-side" style={{transform:`scale(${style})`,transition:`transform(${transform})`}}>
          <img alt="images" src={Images[currentImage].url} className="image" />
        </div>
        <div className="images-main" style={{transform:`scale(${style})`, filter:`brightness(${brightness}%)`,transition:'transform 0.5s'}} >
          <img alt="images" src={Images[nextImage].url} className="image1" />
        </div>
        <div className="images-side" style={{transform:`scale(${style})`,transition:'transform 0.5s'}}> 
          <img alt="images" src={Images[prevImage].url} className="image2" />
        </div>
      </div>
    </div>
  );
}

// style={{ transform: `scale(${style})` }}

const Images = [
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390466/Rmageddon2K24/DSC_0751_zzj84m.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390483/Rmageddon2K24/DSC_0822_ggevzw.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390503/Rmageddon2K24/DSC_0994_lnt22z.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390524/Rmageddon2K24/DSC_1023_rujewn.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390543/Rmageddon2K24/DSC_1029_gfotcc.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390565/Rmageddon2K24/DSC_1043_pxt0eu.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390591/Rmageddon2K24/IMG_1797_e5x1hn.jpg" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390615/Rmageddon2K24/Screenshot_81_cmflzo.png" },
  { url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704390633/Rmageddon2K24/Screenshot_83_j881dj.png" }
];
export default Glimpse;
