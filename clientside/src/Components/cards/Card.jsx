// import React from 'react';
// import './Card.css';

// function Card(){
//     return (
//         <div className='slider'>
//           <div className='main'>
            
//             <div className='maingame'>
//                     {/* <video autoPlay muted loop  className='video'>
//                         <source src={video} type='video/mp4'></source>
//                     </video> */}
//                 <div className='part'>
//                  {/* <h2 >GAME 1</h2> */}
//                 </div>
//                 {/* <hr/>
//                 <hr className='second'/> */}
//                 <div className='text'>
//                  <p>This is the first game of the Rmageddon.
//                     The name is ROBOSUMO.
//                     In this game the two bots fight to win the game.
//                     Hope you all will participate.</p>
//                 </div>
//                     <button className='button button1'>REGISTER</button>
//                     <button className='button button2'>RULEBOOK</button> 
//             </div>
//             <div className='maingame'>
                    
//                  <div className='part'>
                 
//                     <div className='text'>
//                        <p>This is the first game of the Rmageddon.
//                         The name is ROBOSUMO.
//                         In this game the two bots fight to win the game.
//                         Hope you all will participate.</p>
//                     </div>
//                     <button className='button button1'>REGISTER</button>
//                     <button className='button button2'>RULEBOOK</button> 
//                 </div>
//             </div>
//          </div>
//         </div>
//     )
// }
// export default Card;

// import React from 'react';
// import './Card.css';
// import Image from './back1-removebg.png';
// import Image1 from './line.jpg';
// import Image2 from './race.png';
// import Image3 from './download.jpeg';
// import Image4 from './download.png';
  
// function Card(){
//     return (
//         <div className='parentdiv'>
//           <img src={Image} id='background'/>
          
//           <div className='maindiv'>
//           <h1>COMPETITIONS</h1>
//              <div className='maingame'>
//                <div className='text'>
//                 <h2>ROBOSUMO</h2>
//                 <hr/>
//                 <p>This is the first game of the Rmageddon.
//                      The name is ROBOSUMO.
//                      In this game the two bots fight to win the game.
//                   Hope you all will participate.
//                 </p>
//                </div>
//                <div className='button'>
//                 <button className='button1'>REGISTER</button>
//                 <button className='button2'>EXPLORE</button>
//                </div>
//              </div>
//              <div className='smallcards'>
//                <div className='card1'>
//                   <div className='part1'></div>
//                     <h2 className='second'>LINE FOLLOWER</h2>
//                     <hr className='hr'/>
//                     <img src={Image1}/>
//                     <h3>PRIZE POOL: INR 5000RS</h3>
                   
//                     <button className='button3'>REGISTER</button>
//                     <button className='button4'>EXPLORE</button>
//                   </div>
//                <div className='card2'>
//                   <div className='part2'></div>

//                     <h2 className='second'>ROBORACE</h2>
//                     <hr className='hr'/>
//                     <img src={Image2}/>
//                     <h3>PRIZE POOL: INR 5000RS</h3>
//                     <button className='button3'>REGISTER</button>
//                     <button className='button4'>EXPLORE</button>
//                   </div>
//                <div className='card3'>
//                   <div className='part3'></div>
//                   <h2 className='second'>PICK N PLACE</h2>
//                   <hr className='hr'/>
//                   <img src={Image3}/>
//                   <h3>PRIZE POOL: INR 5000RS</h3>
//                   <button className='button3'>REGISTER</button>
//                     <button className='button4'>EXPLORE</button>
//                </div>
//                <div className='card4'>
//                   <div className='part4'></div>
//                     <h2 className='second'>HACKATHON</h2>
//                     <hr className='hr'/>
//                     <img src={Image4}/>
//                     <h3>PRIZE POOL: INR 5000RS</h3>
//                     <button className='button3'>REGISTER</button>
//                     <button className='button4'>EXPLORE</button>
//                   </div>
//              </div>
//           </div>
//         </div>
//     )
// }

import React from 'react';
import './Card.css';
import Image from '../../images/back1-removebg.png';
import Image1 from './line.jpg';
import Image2 from './race.png';
import Image3 from './download.jpeg';
import Image4 from './download.png';
function Card(){
  return (
    <div className='parentdiv'>
      <img src={Image} id='background'/>
      <div className='maindiv'>
        <div className='card1'>
            <div className='text'>
             <h2>ROBOSUMO</h2>
              <p>This is the first game of the Rmageddon.
                      The name is ROBOSUMO.
                      In this game the two bots fight to win the game.
                   Hope you all will participate.</p>
            </div>
            <div className='button'>
                 <button className='button1'>REGISTER</button>
                 <button className='button2'>EXPLORE</button>
                </div>
        </div>
        <div className='smallcards'>
        <div className='card card2'>
        <div className='part1'></div>
           <h3>LINE FOLLOWER</h3>
           <hr/>
           <img src={Image1}/>
           <h4>PRIZE POOL: INR 5000RS</h4>
           <button className='button3'>REGISTER</button>
                   <button className='button4'>EXPLORE</button>
        </div>
        <div className='card card3'>
        <div className='part2'></div>
           <h3>ROBORACE</h3>
           <hr/>
           <img src={Image2}/>
           <h4>PRIZE POOL: INR 5000RS</h4>
           <button className='button3'>REGISTER</button>
                    <button className='button4'>EXPLORE</button>
        </div>
        <div className='card card4'>
        <div className='part3'></div>
           <h3>PICK N PLACE</h3>
           <hr/>
           <img src={Image3}/>
           <h4>PRIZE POOL: INR 5000RS</h4>
           <button className='button3'>REGISTER</button>
                    <button className='button4'>EXPLORE</button>
        </div>
        <div className='card card5'>
        <div className='part4 '></div>
           <h3>HACKATHON</h3>
           <hr/>
           <img src={Image4}/>
           <h4>PRIZE POOL: INR 5000RS</h4>
           <button className='button3'>REGISTER</button>
                    <button className='button4'>EXPLORE</button>
        </div>
      </div>
      </div>
      
    </div>
  )
}
 


export default Card;