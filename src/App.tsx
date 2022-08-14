import React from "react";
import Footer from "./Components/Footer";
import Links from "./Components/Links";
import MainContainer from "./Components/MainContainer/MainContainer";
import Weather from './Components/Weather/Weather';

const App = () => {
    return (
        <>
            <div>
                <Weather />
                <Links />
            </div>
            <MainContainer />
            <Footer />
        </>
    )
}

export default App;