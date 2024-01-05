import React from "react";
import Game  from "./Game";


function Card(){
    const slides=[
        {
            key:1,
            // url:"https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/04/IMG_20210423_195643.jpg?resize=800%2C450&ssl=1",
            url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704441385/Rmageddon2K24/robosumo_oqpcdf.png",
            title:"Dread Showdown",
            content:"Dive into the thrilling world of 'Dread Showdown' : A Robo-Sumo competition! Customize your bots to battle it out in a confined arena. Operator should try to push the opponent's robot out of the arena but the one with the premier controlling & best tactics will win the bout.",
            link: "#game1",
            book: "Sample.pdf"
        },
        {
            key:2,
            // url:"https://s3-ap-southeast-1.amazonaws.com/assets.skyfilabs.com/images/blog/line-follower-with-arm-robot.jpg",
            url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704441428/Rmageddon2K24/linefollower_gphhdw.png",
            title:"Quantum Nexus",
            content:"Quantum nexus is a line follower competition.The goal of the Quantum Nexus competition is for a robot to accurately follow a black line on white surface, maneuver intricate paths and complete the arena in the shortest time possible. The robot that successfully routes the path line from start to finish in the quickest manner will win the competition.",
            link: "#game2",
            book: "Sample.pdf"
        },
        {
            key:3,
            // url:"https://www.automate.org/images/ogImages/RIA-blog-pick-and-place-robots.jpeg",
            url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704441458/Rmageddon2K24/picknplace_ynkyru.png",
            title:"Blitz Place",
            content:"Blitz Place is a dynamic pick-and-place robotics competition wherein robots showcase their precision and agility in picking up and placing objects with fineness. It challenges teams to build optimal bot which can navigate the arena, strategically grabbing and relocating items with delicacy.",
            link: "#game3",
            book: "Sample.pdf"
        },
        {
            key:4,
            // url:"https://i.ytimg.com/vi/BCMy94x2PwU/maxresdefault.jpg",
            url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704441492/Rmageddon2K24/img4_mfpnyi.jpg",
            title:"Path Blozer",
            content:"Encounter the realm of 'Path Blazer' : A RoboRace competition! The goal of Path Blazer competition is to build a wired  robot to be operated manually and should travel through exciting turns and conquer all the obstacles. The robot that will finish the arena in minimal time will win this game.",
            link: "#game4",
            book: "Sample.pdf"
        },
        {
            key:5,
            // url:"https://miro.medium.com/v2/resize:fit:1024/0*rnYWcmRH4KbfCWzt.png",
            url: "https://res.cloudinary.com/doiocpcni/image/upload/v1704441347/Rmageddon2K24/hackathon_scfoli.jpg",
            title:"HACKATHON",
            content:"hackathon is a fast-paced, collaborative event where students with various skills converge to develop creative projects. In a specified time, teams work on coding, design, and business aspects to build prototypes and find innovative solutions.",
            link: "#game5",
            book: "Sample.pdf"
        },
    ]
    return (
        <div id="games" className="main">
            <Game slides={slides} />
        </div>
    )
}
export default Card;