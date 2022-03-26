import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// We'll create objects that contain each category's name and a short description, that way we can use that same data elsewhere in the app.

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    function categorySelected(name) {
        console.log(`${name} clicked`)
    };
    // the first argument is the callback function, and the second argument is an array with a single element, currentCategory. 
    // The second argument directs the hook to re-render the component on changes to the value of this state. In other words, if currentCategory changes now, the component will re-render so that the change in document.title will be visible to the user.
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header data-testid='header' className='flex-row px-1'>
            <h2>
                <a data-testid='link' href='/'>
                    <span role='img' aria-label='camera'> 
                    {' '}
                    📸
                    </span>{' '} 
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid='about' href='#about' onClick={() => setContactSelected(false)}>
                            About
                        </a>
                    </li>
                    {/* In the class attribute, we add a JavaScript conditional statement. If the value of contactSelected is true, which means that the user selected Contact, we want to add the CSS class navActive, which will illuminate the background. We'll use the && operator as a short circuit */}
                    <li className={`mx-2 ${contactSelected && 'navAtive'}`}>
                        <span onClick={() => setContactSelected(true)}>
                        Contact
                        </span>
                        </li>
                        {categories.map((category) => (
                            <li className={`mx-1 ${
                                // The preceding line of code means that currentCategory.name === category.name will get evaluated, and as long as it is true and contactSelected id false, then the third bit of the short circuit, navActive, will be returned.
                                currentCategory.name === category.name && !contactSelected && 'navActive'
                                }`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;