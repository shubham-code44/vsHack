import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/Router';
import ScrollToTop from "./Components/scroll-to-top";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css'

const theme = createTheme({
    typography: {
        fontFamily: [
            'Futura-Bold','Futura-Medium','Futura-Medium-Condensed','Futura-Medium-Italic',
            'Poppins',
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
        <Router>
            <ScrollToTop/>
                <Routes/>
        </Router>
        </ThemeProvider>
    );
}

export default App;
