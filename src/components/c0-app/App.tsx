import React, {useEffect, useState} from 'react';
import './App.scss';
import {Main} from "../c2-main/Main";
import {Header} from "../c1-header/Header";
import {Footer} from "../c3-footer/Footer";

function App() {
    const [headerShow, setHeaderShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }

    return (
        <div className="App">
            <Header headerShow={headerShow}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
