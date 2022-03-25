import React from "react";

function Contact() {
return(
    <section>
        <h1>Contact</h1>
        <form id='contact-form'>
            {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously. */}
           <div>
               <label htmlFor="name">Name:</label>
               <input type="text" name="name" />
            </div>
            <div>
               <label htmlFor="email">Email:</label>
               <input type="email" name="email" />
            </div>
            <div>
               <label htmlFor="message">Message:</label>
               <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
)
}

export default Contact;