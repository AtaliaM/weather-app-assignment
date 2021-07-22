import React from 'react';
import { useState, useEffect } from 'react';
import weather from '../../apis/weather';
import './InputField.css';

function InputField() {

    const [term, setTerm] = useState("");

    const onTermSubmit = async() => {
        try {
            const res = await weather.get(`?query=${term}`);
            console.log(res)
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div className="input-container">
            <div className="ui fluid action input">
                <input type="text" placeholder="Search City" onChange={(e)=>setTerm(e.target.value)}/>
                <button className="ui button" onClick={()=>onTermSubmit()}>Search</button>
            </div>
        </div>
    )
}

export default InputField;