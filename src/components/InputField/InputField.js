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
    const [showLoader, setShowLoader] = useState(false);

    const onTermSubmit = async () => {
        setShowLoader(true);
        try {
            const inputCheckResult = userInputCheck(term);
            if (inputCheckResult) {
                const res = await weather.get(`search/?query=${inputCheckResult}`);
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
            setShowLoader(false);
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
                <input data-testid="search-field" type="text" placeholder="Search City" onKeyPress={(e) => onKeySubmit(e)} onChange={(e) => setTerm(e.target.value)} />
                <button data-testid="search-btn" className="ui button searchbtn" onClick={() => onTermSubmit()}>Search</button>
            </div>
            {noResultsFound ?
                <h4 className="no-results-msg" data-testid="not-found-msg">Sorry, no results found for this location</h4>
                : null}
            {showLoader ? 
                <div class="ui active centered inline loader"/>
                :null}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({
        chosenCity: state.chosenCity,
    })
}

export default connect(mapStateToProps, {
    chooseCity,
    fetchWeather
})(InputField);