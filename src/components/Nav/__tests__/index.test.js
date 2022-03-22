import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);

        expect(asFragment()).toMatchSnapshot();
    });
});

// Test for emoji visibility
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);

        // Two 'expect' statements asserts that both links must have their text contents inserted. If either assertion fails, this test will fail. This is why the preceding screenshot has an additional passing test rather than two additional tests. 
        // Therefore, each 'it' function is associated with a single test case.
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About');
    })
})
