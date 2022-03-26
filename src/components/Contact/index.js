import React, {useState} from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
    // A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // Destructure the formState object into its named properties, name, email, and message.
    const { name, email, message } = formState;

    // useState Hook to handle the error state. Note that the initial state of the errorMessage is an empty string. 
    const [errorMessage, setErrorMessage] = useState('');

    // the handleChange function. This function will sync the internal state of the component formState with the user input from the DOM.
    function handleChange(e) {
        // This conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid.
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            
            if (!isValid) {
                setErrorMessage('A valid email is required.');
            } 
            else {
                setErrorMessage('');
            }
        }
        // Handle the 'message' and 'name' form elements with an else clause of the parent conditional statement that targeted the email form element
        else {
            // We're checking the message and name form element values.
            // The nested conditional statement checks whether the values of these elements are blank. If the input values are blank, an error message is assigned to 'errorMessage'; if not, 'errorMessage' is set to empty string, meaning that there's no error
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else {
                setErrorMessage('');
            }
        }
    };

    function handleSubmit(e) {
        // We'll prevent the default action of the form Submit button.
        e.preventDefault();

        // We wrap the setter function, setFormState, in a conditional so that the state only updates if the form data has passed the quality tests, 
        // we're using the setFormState function to update the formState value for the name property.
        // We use the spread operator '...formState' so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the 'name: value' key pair.
        // The 'name' property of 'target' in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState '(name, email, and message)' and allows us to use [ ] to create dynamic property names.
        // We assign the value taken from the input field in the UI with 'e.target.value' and assign this value to the property [e.target.'prop'].
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
        // The preceding conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic.
        console.log('Form', formState);
    };

    return(
        <section>
            <h1 data-testid='h1tag'> Contact</h1>
            {/* Because forms have an internal state, we can leverage the useState Hook to maintain the form data with state.
            When that form data is maintained by the state of the component, we call it a controlled component.
            When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component*/}
            <form id='contact-form' onSubmit={handleSubmit}>
                {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously. */}
            <div>
                <label htmlFor="name">Name:</label>
                {/* defaultValue attribute - that'll handle form data. With this attribute, we can assign the initial state values to the input fields in the DOM,  */}
                {/* The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name. */}
                {/* The onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input. */}
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" defaultValue={email} onBlur={handleChange}  name="email"  />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                </div>
                {/* If errorMessage has a truthy value, the <div> block will render. If errorMessage doesn't have an error message, the following <div> block doesn't render. The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated. */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid='button' type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;