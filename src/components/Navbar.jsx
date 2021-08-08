import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
            {/* This class for hamburger or toggle: to achieve responsive navbar */}
                <div id="hideShowNav" class="v-class">
                    <div id="first-nav">
                        <div id="logo-nav">
                            <div id="logo">
                                <NavLink to="/"><p>iLearn</p></NavLink>
                            </div>
                        </div>
                        <div id="login-signup">
                            <div id="signup">
                                <NavLink to="/signup"><p>Sign up</p></NavLink>
                            </div>
                            <div id="login">
                                <NavLink to="/login"><p>Log in</p></NavLink>
                            </div>
                        </div>
                    </div>

                    <div id="second-nav" class="b-class">
                        <ul class="nav-items">
                            <li><NavLink exact activeClassName="active_nav" to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName="active_nav" to="/courses">Courses</NavLink></li>
                            <li><NavLink exact activeClassName="active_nav" to="/blog">Blog</NavLink></li>
                            <li><NavLink exact activeClassName="active_nav" to="/about">About</NavLink></li>
                            <li><NavLink exact activeClassName="active_nav" to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div id="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;