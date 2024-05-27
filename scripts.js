// This event listener waits for the DOM to fully load before executing the code inside.
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the current index to show the first image in the carousel.
    let currentIndex = 0;
    // Select all elements with the class 'carousel-image' and store them in the 'images' NodeList.
    const images = document.querySelectorAll('.carousel-image');
    // Calculate the total number of images in the carousel.
    const totalImages = images.length;

    // Add an event listener for the 'click' event on the 'prev' button.
    document.querySelector('.prev').addEventListener('click', function() {
        // Remove the 'active' class from the currently visible image to hide it.
        images[currentIndex].classList.remove('active');
        // Update the currentIndex to the previous image, looping back to the last if the current is the first.
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        // Add the 'active' class to the new current image to make it visible.
        images[currentIndex].classList.add('active');
    });

    // Add an event listener for the 'click' event on the 'next' button.
    document.querySelector('.next').addEventListener('click', function() {
        // Remove the 'active' class from the currently visible image to hide it.
        images[currentIndex].classList.remove('active');
        // Update the currentIndex to the next image, looping back to the first if the current is the last.
        currentIndex = (currentIndex + 1) % totalImages;
        // Add the 'active' class to the new current image to make it visible.
        images[currentIndex].classList.add('active');
    });
});
