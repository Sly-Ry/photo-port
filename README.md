Using React Hooks
React Hooks are a fairly recent addition to the React library that allow you to easily manage state within a component. Before jumping into exactly what a hook is, let's see how one would be used to solve our stopwatch dilemma. Take a minute to look at the following code:

```
import React, { useState } from "react"

function SomeComponent() {
  const [seconds, setSeconds] = useState(0)

  function startStopwatch() {
    let updatedSeconds = seconds;
    setInterval(() => {
      updatedSeconds += 1;
      console.log(updatedSeconds);
      setSeconds(updatedSeconds);
    }, 1000);
  }

return (
  <div>
    {seconds}
    <button onClick={startStopwatch} >Start</button>
  </div>
)
}
```

So there's a couple of things going on here. The first is that we import ```useState``` as a named import from ```react```. This is nothing more than destructuring from imports like you've done in the past. Then within SomeComponent, we're destructuring a pair of variables from the result of ```useState(0)```. ```useState()``` is a function that will always return an array. The first item is the value of your state, and the second item is a ```setter```, which allows you to set the state to something else. Because we're destructuring from an array, we could name these two things whatever we want, but it's best to stick to variable names that make sense.

Rather than trying to change ```seconds``` with the ```+=``` operator, we need to use the ```setSeconds``` method, passing the updated state as an argument. This method is what triggers our component to re-render. Because ```setSeconds``` is asynchronous, we create a new variable called ```updatedSeconds``` to keep track of the seconds in real time.

There's one last bit. Can you guess what ```0``` refers to in ```useState(0)```? If you guessed "the initial state," you were right. This could be any data type, but starting a stopwatch with the number ```0``` makes the most sense.

Hooks - JavaScript functions that follow two rules:

    The first rule is "Only call Hooks from React functions." This should be easy to remember, because you often use Hooks to affect the state of a component in some way and trigger the component to render.

    The second rule is "Only call Hooks at the top level". This means that you cannot use them inside for loops, nested functions within your React component, or conditionals. For organizational purposes and to ensure that you're following these rules, you may want to use Hooks towards the top of your React component.

useEffect - The main difference between useEffect and useState is that useEffect is an API that reflects the lifecycle methods of the component, such as when the component mounts, unmounts, or updates.

A single-page application, or SPA, is a web application or website that interacts with the web browser by dynamically rewriting the current webpage, in place of the default method of the browser loading entirely new pages. This approach allows for a more fluid UI because the page doesn't have to be reloaded each time. React allows for conditional rendering and can replace a portion of the webpage based on the user's selection.

ternary operator - A shorthand condition identified with the ```?``` and ```:``` symbols. The ternary operator is a popular pattern in React to enable conditional rendering, similar to how we used the && operator as a short circuit. With the ternary, though, we supply the false condition to render as well.
