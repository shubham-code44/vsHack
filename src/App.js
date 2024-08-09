import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/Router';
import ScrollToTop from "./Components/scroll-to-top";

function App() {
    return (
        <Router>
            <ScrollToTop/>
                <Routes/>
        </Router>
    );
}

export default App;
