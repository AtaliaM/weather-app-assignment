import React from 'react';
import InputField from '../components/InputField/InputField';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import ExtendedForecast from '../components/ExtendedForecast/ExtendedForecast';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <InputField />
            <CurrentWeather/>
            <ExtendedForecast/>
            <Footer/>
        </>
    )
}

export default Home;