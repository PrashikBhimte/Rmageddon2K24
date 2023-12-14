import React, { useState } from 'react';
import "./indform";
import axios from "axios";

export default function Indform() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [collage, setCollage] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleAge = (event) => {
        setAge(event.target.value);
    }

    const handleGender = (event) => {
        setGender(event.target.value);
    }

    const handleNumber = (event) => {
        setNumber(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleCollage = (event) => {
        setCollage(event.target.value);
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const data = {
            name : name,
            age : age,
            gender : gender,
            number : number,
            email : email,
            collage : collage
        };
        console.log(data);
        try {
            axios.post("http://localhost:4000/register/ind/", data);
        }
        catch (error) {
            console.log(error.message);
        }
    }

  return (
    <form>
        <label>Name : <input type='text' name='name' value={name} onChange={handleName}></input></label>
        <label>Age : <input type='number' name='age' min={16} max={25} value={age} onChange={handleAge}></input></label>
        <label>Gender : 
            <input type='radio' name='gender' value="male" onChange={handleGender}></input> Male
            <input type='radio' name='gender' value="female" onChange={handleGender}></input> Female
        </label>
        <label>Phone Number : <input type='number' name='number' min={1000000000} max={9999999999} value={number} onChange={handleNumber}></input></label>
        <label>Email : <input type='email' name='email' value={email} onChange={handleEmail}></input></label>
        <label>Collage Name : <input type='text' name='collage' value={collage} onChange={handleCollage}></input></label>
        <button type='submit' onClick={handleClick}>Register</button>
    </form>
  )
}
