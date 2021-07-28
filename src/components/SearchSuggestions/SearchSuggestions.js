import React from 'react';
import { connect } from 'react-redux';
import { chooseCity, fetchWeather } from '../../actions';
import weather from '../../apis/weather';
import './SearchSuggestions.css'

function SearchSuggestions(props) {

    const onSuggestionSubmit = async (suggestion) => {
        try {
            const res = await weather.get(`search/?query=${suggestion}`);
            props.hideSuggestions(res.data.length);
            if (res.data.length !== 0) {
                props.chooseCity(res.data[0])
            }
            else {
                props.fetchWeather(null);
                props.chooseCity(null);
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
        <h4 className="suggestions-h">Click your selection</h4>
            {props.suggestions.map((suggestion) => {
                return (
                    <div className="suggestion">
                        <span>Did you mean</span>
                        <button className="suggestion-btn" onClick={() => onSuggestionSubmit(suggestion)}>{suggestion}?</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        chosenCity: state.chosenCity,
    })
}

export default connect(mapStateToProps, {
    chooseCity,
    fetchWeather
})(SearchSuggestions);