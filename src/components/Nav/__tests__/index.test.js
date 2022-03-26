import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    {  name: 'portraits', description: 'Portraits of people in my life' }
]

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactedSelected={mockSetContactSelected} 
        />);
    });

    it('matches snapshot', () => {
        const { asFragment } = 
            render(<Nav 
                categories={categories}
                setCurrentCategory={mockSetCurrentCategory}
                currentCategory={mockCurrentCategory} 
                contactSelected={mockContactSelected}
                setContactedSelected={mockSetContactSelected}   
            />);

        expect(asFragment()).toMatchSnapshot();
    });
});

// Test for emoji visibility
describe('emoji is visible', () => {
    it('insert emoji into the h2', () => {
        const { getByLabelText } = 
            render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory} 
            contactSelected={mockContactSelected}
            setContactedSelected={mockSetContactSelected}    
        />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = 
            render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactedSelected={mockSetContactSelected}     
        />);

        // Two 'expect' statements asserts that both links must have their text contents inserted. If either assertion fails, this test will fail. This is why the preceding screenshot has an additional passing test rather than two additional tests. 
        // Therefore, each 'it' function is associated with a single test case.
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About');
    })
})
