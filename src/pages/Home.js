import React from 'react';
import InputField from '../components/InputField/InputField';
import CurrentWeather from '../components/CurrentWeather/CurrentWeather';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Header />
            <InputField />
            <CurrentWeather/>
            <Footer/>
        </>
    )
}

export default Home;