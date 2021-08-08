import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="contact_form">
                <h2>Contact US</h2>
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Email Address" />
                <textarea name="" id="" cols="30" rows="1" placeholder="Write your message..."></textarea>
                <button>Submit</button>
            </div>

        </>
    )
}

export default Contact;
