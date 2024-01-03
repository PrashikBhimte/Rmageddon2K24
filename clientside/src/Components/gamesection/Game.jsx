import { React, useState } from "react";
import "./Game.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import useSound from "use-sound";
import sound from "../../sounds/click.mp3";

function Game({ slides }) {
  const [play] = useSound(sound);

  // let count=0;
  const [currentslide, setcurrentslide] = useState(0);
  const [currentcontent, setcurrentcontent] = useState(0);
  const [currentheading, setcurrentheading] = useState(0);
  // const [link, setLink] = useState(0);
  // const [book, setbook] = useState(0);

  const prevslide = () => {
    const isfirstslide = currentslide === 0;
    const moveto = isfirstslide ? slides.length - 1 : currentslide - 1;
    setcurrentslide(moveto);
    setcurrentcontent(moveto);
    setcurrentheading(moveto);
    // setLink(moveto);
    // setbook(moveto);
  };
  const nextslide = () => {
    const islastslide = currentslide === 4;
    const move = islastslide ? 0 : currentslide + 1;
    setcurrentslide(move);
    setcurrentcontent(move);
    setcurrentheading(move);
    // setLink(move);
    // setbook(move);
  };

  function openMessage() {
    document.getElementById("message").style.display = "flex";
  }

  function closeMessage() {
    document.getElementById("message").style.display = "none";
  }

  // function download() {
  //   const pdfUrl = slides[book].book;
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "document.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  return (
    <div className="games-parentdiv">
      <img alt="background" src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" id="background" />
      <div className="games-maindiv">
        <p className="gameheading">The Games</p>
        <div className="games-images">
          <button
            className="btn"
            onClick={() => {
              play();
              prevslide();
            }}
          >
            <GrFormPrevious />
          </button>
          <img
            alt="anImage"
            src={slides[currentslide].url}
            className="games-image"
          />
          <button
            className="btn"
            onClick={() => {
              play();
              nextslide();
            }}
          >
            <GrFormNext />
          </button>
        </div>
        <div className="games-bottom">
          <div className="games-heading">
            <p>{slides[currentheading].title}</p>
          </div>
          <div className="games-content">
            <p>{slides[currentcontent].content}</p>
          </div>
          <div className="games-buttons">
            {/* <a href={slides[link].link}> */}
            <a href="registre">
              <button
                onClick={() => {
                  play();
                }}
              >
                Register
              </button>
            </a>
            <button
              onClick={() => {
                play();
                openMessage();
                // download();
              }}
            >
              Rule Book
            </button>
          </div>
          <div className="games-message" id="message">
            <p>Rule Book will be avaliable soon...</p>
            <button
              onClick={() => {
                play();
                closeMessage();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
