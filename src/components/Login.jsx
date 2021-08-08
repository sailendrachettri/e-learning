import React from 'react';

const Login = () => {
    return (
        <>
            <div id="login-div">
                <form id="login-form" action="/login" method="post">
                    <input name="email" class="inp" type="text" placeholder="email" />
                    <input name="password" class="inp" type="password" placeholder="password" />
                    <p name="forgot-btn" class="forgot-p">Forgot password</p>

                    <div class="div-center">
                        <input class="submit-inp" type="submit" value="Submit" />
                        <input name="login-facebook" class="login-with-btn" type="button" value="Login with Facebook" />
                        <input name="login-google" class="login-with-btn" type="button" value="Login with Google" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;
