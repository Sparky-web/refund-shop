import React, {} from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Pages from "./components/Pages/Pages";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Pages/>
            <Footer/>
        </div>
    );
}

export default App;
