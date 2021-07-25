import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import weather from '../../apis/weather';
import { chooseCity, fetchWeather } from '../../actions';
import userInputCheck from '../../utils/userInputCheck';
import './InputField.css';

function InputField(props) {

    const [term, setTerm] = useState("");
    const [noResultsFound, setNoResultsFound] = useState(false);

    const onTermSubmit = async () => {
        try {
            const inputCheckResult = userInputCheck(term);
            if (inputCheckResult) {
                const res = await weather.get(`search/?query=${inputCheckResult}`);
                console.log(res.data)
                if (res.data.length !== 0) {
                    props.chooseCity(res.data[0])
                    setNoResultsFound(false);
                }
                else {
                    setNoResultsFound(true);
                    props.fetchWeather(null);
                    props.chooseCity(null);
                }

            }
            //if term returns one city- pass the city to our action creator 'chooseCity',
            //if there are user typos, check for match within cities dataset,
            //if multiple cities returned, 
        } catch (e) {
            console.log(e);
        }
    }

    const onKeySubmit = (e) => {
        if (e.key === 'Enter') {
            onTermSubmit();
        }
    }

    return (
        <div className="input-container">
            <div className="ui fluid action input left icon">
                <i className="search icon"></i>
                <input type="text" placeholder="Search City" onKeyPress={(e) => onKeySubmit(e)} onChange={(e) => setTerm(e.target.value)} />
                <button className="ui button searchbtn" onClick={() => onTermSubmit()}>Search</button>
            </div>
            {noResultsFound ?
                <h4 className="no-results-msg">Sorry, no results found for this location</h4>
                : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        chosenCity: state.chosenCity,
        cities: state.cities
    })
}

export default connect(mapStateToProps, {
    chooseCity,
    fetchWeather
})(InputField);