import React from 'react';

const Signup = () => {
    return (
        <>
            <div id="signup-div">
                <form id="signup-form" action="/signup" method="post">
                    <input name="fullname" class="inp" type="text" placeholder="Full Name" />
                    <input name="email" class="inp" type="text" placeholder="Your Email" />
                    <input name="password" class="inp" type="password" placeholder="Password" />
                    <input name="confirmPassword" class="inp" type="password" placeholder="Confirm password" />

                    <div class="div-center">
                        <input class="submit-inp" type="submit" value="Submit" />
                        <input name="signup-google" class="signup-with-btn" type="button" value="Signup with Google" />
                        <input name="signup-facebook" class="signup-with-btn" type="button" value="Signup with Facebook" />
                    </div>
                </form>
            </div>

        </>
    )
}

export default Signup;
