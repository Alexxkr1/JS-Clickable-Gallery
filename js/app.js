const mainImage = document.querySelector('.gallery-image1 img');
const imagesToClick = document.querySelectorAll('.gallery img');
console.log(imagesToClick)

imagesToClick.forEach (img => img.addEventListener('click', changeImage));

function changeImage(event){

    imagesToClick.forEach(img => (img.style.opacity = 1));

    console.log(event.target);
    event.target.style.opacity = 0.5;
    mainImage.src = event.target.src;

    if (event.target === mainImage) {
        mainImage.src = 'img/img1.jpg';
        mainImage.style.opacity = 1;
    }
}

