import Navbar from './component/Navbar/Navbar';
import './App.css';
import Intro from './component/Intro/Intro';

import React, { useContext } from 'react'
import Services from './component/Services/Services';
import Experience from './component/Experience/Experience';
import Works from './component/Works/Works';
import Portfolio from './component/Portfolio/Portfolio';
// import Testimonial from './component/Testimonials/Testimonials';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import { themeContext } from './Context';
const App = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="App"
            style={{
                background: darkMode ? 'black' : '',
                color: darkMode ? 'white' : '',
                transition: '1s'
            }}>
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            {/* <Testimonial /> */}
            <Contact />
            <Footer />
        </div>
    )
}


export default App;
