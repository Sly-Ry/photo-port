import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Gallery from '..';

const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup);

describe('Gallery is rendering', () => {

    it('renders', () => {
        render(<Gallery currentCategory={portrait} />);
    });

    // Test to make sure the gallery matches its snapshot
    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery  currentCategory={portrait} />);
        expect(asFragment()).toMatchSnapshot();
    });

    // Test to make sure that the title of our <h1> is Portraits
    it('renders', () => {
        const { getByTestId } = render(<Gallery  currentCategory={portrait} />);
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    });
});