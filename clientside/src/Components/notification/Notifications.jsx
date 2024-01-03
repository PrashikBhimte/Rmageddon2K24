import React from 'react';
import "./Notifications.css";
import { useState } from 'react';

export default function Notifications() {

    const [info, setinfo] = useState("");


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
                <img src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" alt='background' id='background' />
                <div className='notiDiv'>
                    <p className='notihead'>Notifications</p>
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
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoiho hihoiho ihifhfhri hfh  hfhuh uh uh ur uhuhfoh fhfhoi f h;hf h fohf;o",
        info: " 1 iihfoi ehfoihoi fhwoih foihofh oihofhoi hfohfoaiew hfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifh iefe hfhe fbsd jcj kbuew hei hfoei whfjbufj fewugof hewjfbds fue h ihf ihe fhewofwei oewhfj bc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 2,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 2 iihfoi ehfoihoi fhwoih foihofh oihofhoi hfohfoaiew hfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifh iefe hfhe fbsd jcj kbuew hei hfoei whfjbufj fewugof hewjfbds fue h ihf ihe fhewofwei oewhfj bc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 3,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 3 iihfoi ehfoihoi fhwoih foihofh oihofhoi hfohfoaiew hfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifh iefe hfhe fbsd jcj kbuew hei hfoei whfjbufj fewugof hewjfbds fue h ihf ihe fhewofwei oewhfj bc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 4,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 4 iihfoi ehfoihoi fhwoih foihofh oihofhoi hfohfoaiew hfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifh iefe hfhe fbsd jcj kbuew hei hfoei whfjbufj fewugof hewjfbds fue h ihf ihe fhewofwei oewhfj bc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    },
    {
        id: 5,
        heading: " hoih ihif hihciodhco ihi",
        line: "sco hfih foihihri hihoihih oifhio f hoihgiofhoih ihoihohihoihoihifhfhrihfh  hfhuh uh uh ur uhuhfohfhfhoifh;hfhfohf;o",
        info: " 5 iihfoi ehfoihoi fhwoih foihofh oihofhoi hfohfoaiew hfohf  f fewi fhef e i hiewhi hifhew ifewii ehi fi heifh iefe hfhe fbsd jcj kbuew hei hfoei whfjbufj fewugof hewjfbds fue h ihf ihe fhewofwei oewhfj bc8ew  efeoihfd fedsf efjf ewoihe ewih oeoi ifihfchiche wie iedifyiyf hihuefugf f  pihcihc fifewihfbhc eih whebcjcbjbobpi  hiphfp hpichccbpi ef 9pwy feihcpie wf;ahw;fyhodfc h ich ci h  gfaufggcp8w 8fffwe;f ;8o"
    }
]