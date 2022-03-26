// This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components.
import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

//  JSX can represent HTML in JavaScript
// Normally you can't add HTML to JavaScript, at least without making it a string. But it won't break the code in this case, because you're using webpack and React. 
// Think of functions that return JSX as functions that use document.createElement(JSX).

function App() {// We set the initial value of contactSelected to false to prevent the contact form from showing when a user initially navigates to the homepage.
// The Gallery will display instead, which is the first thing Lyza's customers will want to see.

const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { 
      name: "portraits", 
      description: "Portraits of people in my life"
    },
    { 
      name: "food", 
      description: "Delicious delicacies" 
    },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/*  if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered. */}
        {!contactSelected ? (
          // Notice the <> and </> that wrap the Gallery and About components. They are called 'React fragments' —a shorthand abbreviation for <React.Fragment></React.Fragment>.
          // They're a useful tool in React to allow multiple elements to be grouped together. Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : ( 
          <Contact></Contact> 
        )}
      </main>   
    </div>
  );
}

export default App;
