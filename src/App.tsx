import React from "react";
import Footer from "./Components/Footer";
import Links from "./Components/Links";
import MainContainer from "./Components/MainContainer";
import Weather from './Components/Weather';

const App = () => {
    return (
        <div>
            <Weather />
            <Links />
            <MainContainer />
            <Footer />
        </div>
    )
}

export default App;