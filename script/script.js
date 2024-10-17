// Navbar menu toggle
const menuBars = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menuBars.addEventListener('click', () => {
    menuBars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Remove navbar on link click or scroll
const navLinks = document.querySelectorAll('.navbar a');
window.onscroll = () => {
    menuBars.classList.remove('fa-times');
    navbar.classList.remove('active');
};

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBars.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// Search form validation
const searchForm = document.querySelector('section.home form');
const minPrice = searchForm.querySelectorAll('select')[0];
const maxPrice = searchForm.querySelectorAll('select')[1];
const searchButton = searchForm.querySelector('input[type="submit"]');

searchButton.addEventListener('click', (e) => {
    const minValue = parseInt(minPrice.value.replace('$', ''));
    const maxValue = parseInt(maxPrice.value.replace('$', ''));

    if (minValue > maxValue) {
        e.preventDefault(); // prevent form submission
        alert("Boshlang'ich narx eng qimmat narxdan kichik bo'lishi kerak!");
    }
});

// Scroll to sections with smooth effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carousel feature for 'featured' section (basic setup)
let currentIndex = 0;
const featuredBoxes = document.querySelectorAll('.featured .box-container .box');

function showNextBox() {
    featuredBoxes[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % featuredBoxes.length;
    featuredBoxes[currentIndex].classList.add('active');
}

function showPreviousBox() {
    featuredBoxes[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + featuredBoxes.length) % featuredBoxes.length;
    featuredBoxes[currentIndex].classList.add('active');
}

// Adding event listeners to carousel buttons (assume previous/next buttons exist)
const prevButton = document.querySelector('.featured .prev-btn');
const nextButton = document.querySelector('.featured .next-btn');

prevButton.addEventListener('click', showPreviousBox);
nextButton.addEventListener('click', showNextBox);

// Initial load: show first box
featuredBoxes[currentIndex].classList.add('active');

// Icons interaction (heart, phone, email)
const heartIcons = document.querySelectorAll('.fa-heart');
const contactIcons = document.querySelectorAll('.fa-envelope, .fa-phone');

heartIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.target.classList.toggle('active'); // Mark as favorite
        alert('Uy Sevimli ro\'yxatga qo\'shildi!');
    });
});

contactIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        alert("Aloqa uchun murojaat qilinmoqda...");
    });
});
