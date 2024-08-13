const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
});

// Slideshow functionality with dynamic text and transitions

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const slides = [
        {
            image: './images/slide2.jpg',
            title: 'Learn Job Ready Skills from Free Online Courses with Certificates',
            description: 'Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!',
            ctaPrimary: 'Read More',
        },
        {
            image: './images/slide3.jpg',
            title: 'Master the Art of Web Development with Comprehensive Courses',
            description: 'Join our web development courses to build responsive, modern websites from scratch. Start your coding journey today!',
            ctaPrimary: 'Read More',
        },
        {
            image: './images/slide4.jpg',
            title: 'Get Certified in AWS and Boost Your Career',
            description: 'Enroll in our AWS certification courses and become a cloud computing expert. Enhance your resume with in-demand skills!',
            ctaPrimary: 'Read More',
        }
    ];

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Update background image with transition
    hero.style.backgroundImage = `url('${slides[slideIndex].image}')`;

    // Hide content while transitioning
    heroContent.classList.remove('show');

    setTimeout(() => {
        // Update text content
        heroContent.innerHTML = `
            <h1>${slides[slideIndex].title}</h1>
            <p>${slides[slideIndex].description}</p>
            <div class="cta-buttons">
                <a href="#" class="btn-primary">${slides[slideIndex].ctaPrimary}</a>
            </div>
        `;

        // Show content after the background transition
        heroContent.classList.add('show');
    }, 500);
}

// Automatic Slideshow
setInterval(() => {
    plusSlides(1);
}, 5000);

// Form Validation and Submission
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        formResponse.textContent = 'Please fill in all fields.';
        formResponse.style.color = 'red';
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
        formResponse.style.color = 'green';
        contactForm.reset();
    }, 1000);
});