import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Features from './Components/Features';
import Tariff from './Components/Tariff';
import Destination from './Components/Destination';


const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Features/>
        <Tariff/>
        <Destination/>
        <Footer/>
    </div>
  )
}

export default Home;
