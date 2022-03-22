import React from 'react';

// 'render' - Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// 'cleanup' - used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';

// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';

// Import the About component.
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// the describe function to declare the component we're testing
describe('About component', () => {
    // The first test will be the baseline to verify that the component is rendering.
    // first argument ['renders'] - a string declares what is being tested; we'll use the render function to render the About component using JSX.
    // second argument ['()'] - a callback function runs the test.
    // Alternatively, 'test' can also be used interchangeably with 'it' to create a test.
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot', () => {
        //  the asFragment function returns a snapshot of the About component
        const { asFragment } = render(<About />);
        // Use the 'expect' function with a matcher to assert something about a value. 
        // Use the 'toMatchSnapshot' matcher to assert that snapshots will match.
        expect(asFragment()).toMatchSnapshot();
    });
});
