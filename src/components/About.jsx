import React from 'react';
import about_img from '../img/about_img.svg';
import twiter_img from '../img/Icons/twitter.png';
import linkedin_img from '../img/Icons/linkedin.png';
import youtube_img from '../img/Icons/youtube.png';

const About = () => {
    return (
        <>
            <div id="about-company">
                <div id="about-left">
                    <h2>iLearn</h2>
                    <p>Locon sectetur adipisicing elit. Culpa tempora voluptates eaque nemo magni ut nostrum distinctio expedita
                        in porro iure blanditiis. Mollitia natus dolorem fugiat asperiores?</p>
                    <p>Locon sectetur adipisicing elit. Culpa tempora voluptates eaque nemo magni ut nostrum distinctio expedita
                        in porro iure blanditiis. Mollitia natus dolorem fugiat asperiores?</p>
                    <div id="social-media">
                        <a href="https://youtube.com"> <img src={youtube_img} alt="YoutTube Icon" /></a>
                        <a href="https://twitter.com/sailendrchettri"> <img src={twiter_img} alt="Twitter Icon" /></a>
                        <a href="https://linkedin.com/in/sailendrachettri"> <img src={linkedin_img} alt="LinkedIn Icon" /></a>
                    </div>
                </div>

                <div id="about-right">
                    <img src={about_img} alt="learn everywhere bckground" />
                </div>
            </div>
        </>
    )
}

export default About;
