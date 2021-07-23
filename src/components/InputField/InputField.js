import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';
import { chooseCity } from '../../actions';
import './InputField.css';

function InputField(props) {

    const [term, setTerm] = useState("");

    const onTermSubmit = async() => {
        try {
            const res = await weather.get(`search/?query=${term}`);
            console.log(res.data)
            //if term returns one city- pass the city to our action creator 'chooseCity',
            //if there are user typos, check for match within cities dataset,
            //if multiple cities returned, 
            props.chooseCity(res.data[0])
        } catch(e) {
            console.log(e);
        }
    }

    const onKeySubmit = (e) => {
        if(e.key === 'Enter'){
           onTermSubmit();
          }
    }

    return (
        <div className="input-container">
            <div className="ui fluid action input">
                <input type="text" placeholder="Search City" onKeyPress={(e)=>onKeySubmit(e)} onChange={(e)=>setTerm(e.target.value)}/>
                <button className="ui button searchbtn" onClick={()=>onTermSubmit()}>Search</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return( {
        chosenCity: state.chosenCity,
        cities: state.cities
    })
}

export default connect(mapStateToProps, {
    chooseCity
})(InputField);