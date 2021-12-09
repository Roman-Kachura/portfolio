import React from 'react';
import './App.scss';
import {Main} from "../c2-main/Main";
import {Header} from "../c1-header/Header";
import {Footer} from "../c3-footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
