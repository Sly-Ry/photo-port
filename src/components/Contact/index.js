import React, {useState} from "react";

function Contact() {
    // A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // Destructure the formState object into its named properties, name, email, and message.
    const { name, email, message } = formState;

    // the handleChange function. This function will sync the internal state of the component formState with the user input from the DOM.
    function handleChange(e) {
        // we're using the setFormState function to update the formState value for the name property.
        // We use the spread operator '...formState' so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the 'name: value' key pair.
        // The 'name' property of 'target' in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState '(name, email, and message)' and allows us to use [ ] to create dynamic property names.
        // We assign the value taken from the input field in the UI with 'e.target.value' and assign this value to the property [e.target.'prop'].
        setFormState({...formState, [e.target.name]: e.target.value })
    };

    function handleSubmit(e) {
        // We'll prevent the default action of the form Submit button.
        e.preventDefault();
        // Log the formState object on the Submit button click.
        console.log(formState);
    };

    return(
        <section>
            <h1>Contact</h1>
            {/* Because forms have an internal state, we can leverage the useState Hook to maintain the form data with state.
            When that form data is maintained by the state of the component, we call it a controlled component.
            When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component*/}
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously. */}
            <div>
                <label htmlFor="name">Name:</label>
                {/* defaultValue attribute - that'll handle form data. With this attribute, we can assign the initial state values to the input fields in the DOM,  */}
                {/* The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name. */}
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" defaultValue={email} onChange={handleChange}  name="email"  />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;