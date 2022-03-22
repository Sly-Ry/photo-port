// This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components.
import React from 'react';
import About from './components/About';

//  JSX can represent HTML in JavaScript
// Normally you can't add HTML to JavaScript, at least without making it a string. But it won't break the code in this case, because you're using webpack and React. 
// Think of functions that return JSX as functions that use document.createElement(JSX).
function App() {

  return (
    <div>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
