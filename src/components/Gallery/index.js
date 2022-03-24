import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            {/* Use some prop drilling and pass down the currentCategory.name as a prop into the Photolist component from Gallery  */}
            <PhotoList category={currentCategory.name} />
        </section>
    );
}
export default Gallery;