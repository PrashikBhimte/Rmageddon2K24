import React from 'react';
import "./Notifications.css";
import background1 from "../../images/back1-removebg.png";
import background2 from "../../images/Slice_1-removebg-preview.png";
import { useState, useEffect } from 'react';

export default function Notifications() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [srcImg, setSrcImg] = useState(background1);
    const [info, setinfo] = useState("");

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
            setSrcImg(background2);
        }
        else {
            setSrcImg(background1);
        }
    }, [windowWidth]);

    function handleClick(id) {
        setinfo(data.map((key) => { let i = ""; if (key.id === id) {i = key.info} return i;}));
    }

    const Message = (props) => {
        return (
            <div className='message' id={props.id}>
                <p>{props.heading}</p>
                <p>{props.line}</p>
                <div className='mesBut'>
                    <button onClick={() => {handleClick(props.id)}}>Read More</button>
                </div>
            </div>
        )
    }

    return (
        <div className='main'>
            <div className='notifications'>
                <img src={srcImg} alt='background' id='background' />
                <div className='notiDiv'>
                    <div className='notins'>
                        {data.map((key) => { return <Message id={key.id} heading={key.heading} line={key.line} /> })}
                    </div>
                    <div className='notinfo'>
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        id: 1,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 1 iihfoi ehfoihoi fhwoih foihofhoihofhoihfohfoaiewhfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifhiefehfhefbsdjcjkbuew hei hfoeiwhfjbufjfewugofhewjfbdsfue h ihf ihefhewofwei oewhfjbc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 2,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 2 iihfoi ehfoihoi fhwoih foihofhoihofhoihfohfoaiewhfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifhiefehfhefbsdjcjkbuew hei hfoeiwhfjbufjfewugofhewjfbdsfue h ihf ihefhewofwei oewhfjbc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 3,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 3 iihfoi ehfoihoi fhwoih foihofhoihofhoihfohfoaiewhfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifhiefehfhefbsdjcjkbuew hei hfoeiwhfjbufjfewugofhewjfbdsfue h ihf ihefhewofwei oewhfjbc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 4,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 4 iihfoi ehfoihoi fhwoih foihofhoihofhoihfohfoaiewhfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifhiefehfhefbsdjcjkbuew hei hfoeiwhfjbufjfewugofhewjfbdsfue h ihf ihefhewofwei oewhfjbc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 5,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 5 iihfoi ehfoihoi fhwoih foihofhoihofhoihfohfoaiewhfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifhiefehfhefbsdjcjkbuew hei hfoeiwhfjbufjfewugofhewjfbdsfue h ihf ihefhewofwei oewhfjbc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    }
]