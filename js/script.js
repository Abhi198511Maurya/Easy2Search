

const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');
const icon = mobileMenu.querySelector('#mobile-menu i');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('open');
    icon.classList.toggle('fa-xmark');
});

// Get the current URL path
const currentPath = window.location.pathname;

// Select all the navigation links
const navLinks = document.querySelectorAll('.navbar-links li a');

// Loop through each link
navLinks.forEach(link => {
    // Extract the path from the link's href
    const linkPath = new URL(link.href).pathname;

    // Check if the link's path matches the current path
    if (linkPath === currentPath) {
        link.classList.add('underline');
    } else {
        link.classList.remove('underline');
    }
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
                <a href="about.html" class="btn-primary">${slides[slideIndex].ctaPrimary}</a>
            </div>
        `;

        // Show content after the background transition
        heroContent.classList.add('show');
    }, 500);
}

// Automatic Slideshow
setInterval(() => {
    plusSlides(1);
}, 7000);

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        // Toggle active class
        parent.classList.toggle('active');

        // Close other open FAQs
        document.querySelectorAll('.faq-item').forEach(child => {
            if (child !== parent) {
                child.classList.remove('active');
            }
        });
    });
});


// footer secition
// Handle Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('newsletter-email').value.trim();
    const responseMessage = document.getElementById('newsletter-response');
  
    if (email === '') {
      responseMessage.textContent = 'Please enter your email.';
      responseMessage.style.color = 'red';
      return;
    }
  
    // Simulate subscription process
    setTimeout(() => {
      responseMessage.textContent = 'Thank you for subscribing!';
      responseMessage.style.color = 'green';
      document.getElementById('newsletter-form').reset();
    }, 1000);
  });
  