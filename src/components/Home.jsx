import React from 'react';
import About from './About';
import Courses from './Courses';
import Faculty from './Faculty';
import FrontPage from './FrontPage';
import Pricing from './Pricing';

const Home = () => {
    return (
        <>
            <FrontPage />
            <Courses />
            <Faculty />
            <Pricing />
            <About />
        </>
    )
}

export default Home;
