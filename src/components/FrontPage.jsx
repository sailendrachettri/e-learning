import React from 'react';
import { NavLink } from 'react-router-dom';   
import homepage_img from '../img/homepage_img.svg';

const FrontPage = () => {
    return (
        <>
            <div id="homepage">
                <div>
                    <p class="intro">The best way to learn
                        web development and
                        programming.</p>
                    <p><NavLink class="explore-btn" exact to="/courses">Explore </NavLink></p>
                </div>
                <img id="bg-home" src={homepage_img} alt="Background img" />
            </div>
        </>
    )
}

export default FrontPage;
