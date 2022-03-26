import React, { useState } from 'react';
import Modal from '../Modal';

function PhotoList({ category }) {

    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },

    ]);

    // We'll use the useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props,
    const [currentPhoto, setCurrentPhoto] = useState();

    // we set the initial state of isModalOpen to false, because we don't want the modal to open until a user has clicked on an image
    const [isModalOpen, setIsModalOpen] = useState(false);

    // We're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user. If a photo matches the condition, it is returned in an array and assigned to currentPhotos. 
    const currentPhotos = photos.filter((photo) => photo.category === category);

    // we updated the current photo state using the setCurrentPhoto function with the data retrieved through the click event. Notice how we used the spread operator here to add the index: i key value pair to the current photo state.
    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
            )}
            <div className='flex-row'>
            {/* We can map the currentPhotos array to render each photo that matches the category selected by the user. */}
                {currentPhotos.map((image, i) => (
                    <img
                        // src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! We were also able to take advantage of the incremental naming of the images by using i.
                        // The default property is where the image has been saved. To render the image, the default property must be invoked.
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        // The alt attribute is used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned.
                        alt={image.name}
                        className='img-thumbnail mx-1'
                        // we added the event listener attribute to each <img> element in each category and assigned the toggleModal function to handle the click event. We passed in the current image and i as arguments. 
                        // The image object represents the element in the photos array, and the i will render the image as we did previously in the src attribute with the require function.
                        onClick={() => toggleModal(image, i)}
                        // The key attribute was also assigned the image's name. This attribute value must be a unique string. The absence of this unique key value will cause an error message.
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;