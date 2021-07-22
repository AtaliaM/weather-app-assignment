import React from 'react';
import InputField from '../components/InputField/InputField';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Header from '../components/Header/Header';

function Home() {
    return (
        <>
            <Header />
            <InputField />
            <CurrentWeather/>
        </>
    )
}

export default Home;