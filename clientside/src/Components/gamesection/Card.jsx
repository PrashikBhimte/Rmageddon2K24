import React from "react";
import Game  from "./Game";
import img1 from './linefollower.png';
import img2 from './robosumo.png'
import img3 from './picknplace.png'
import img4 from './img4.jpeg'
import img5 from './hackathon.jpeg'
function Card(){
    const slides=[
        {
            key:1,
            // url:"https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/04/IMG_20210423_195643.jpg?resize=800%2C450&ssl=1",
            url:img2,
            title:"ROBOSUMO",
            content:"Design a wired robot within the specified dimensions that can operated manually and can travel through all turns of the track and pass through all the obstacles. The robot that will complete the race in least time will be the winner of the RETROMANIA."
        },
        {
            key:2,
            // url:"https://s3-ap-southeast-1.amazonaws.com/assets.skyfilabs.com/images/blog/line-follower-with-arm-robot.jpg",
            url:img1,
            title:"LINE  FOLLOWER",
            content:"The goal of the PAC RUNNER contest is for a robot to accurately follow a black line on a white background, navigate various turns, and complete the arena in the shortest time possible. The robot that successfully tracks the path line from start to finish in the quickest manner will be the winner."
        },
        {
            key:3,
            // url:"https://www.automate.org/images/ogImages/RIA-blog-pick-and-place-robots.jpeg",
            url:img3,
            title:"PICK N PLACE",
            content:"NINJA CLASH is a sport in which 2 robots have to push each other out of the arena. The operators have to operate robots from outside and try to push opponent's robot out of the arena by different tactics also have to prevent own robot from leaving the arena."
        },
        {
            key:4,
            // url:"https://i.ytimg.com/vi/BCMy94x2PwU/maxresdefault.jpg",
            url:img4,
            title:"ROBORACE",
            content:"Roborace was a competition with autonomously driving, electrically powered vehicles.[1] Founded in 2015 by Denis Sverdlov, it aimed to be the first global championship for autonomous cars.[2] From 2017 to 2019, the official CEO was 2016–17 Formula E champion, Lucas Di Grassi, who later became a member of Roborace’s supervisory board. The series tested their technology and race formats at FIA Formula E Championship events during 2016–2018."
        },
        {
            key:5,
            // url:"https://miro.medium.com/v2/resize:fit:1024/0*rnYWcmRH4KbfCWzt.png",
            url:img5,
            title:"HACKATHON",
            content:"A hackathon, also known as a codefest, is a social coding event that brings computer programmers and other interested people together to improve upon or build a new software program. The word hackathon is a portmanteau of the words hacker, which means clever programmer, and marathon, an event marked by endurance."
        },
    ]
    return (
        <div className="main">
            <Game slides={slides} />
        </div>
    )
}
export default Card;