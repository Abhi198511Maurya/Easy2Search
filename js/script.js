// ---------------------------------- NAVIGATION BAR USING JS --------------------------------------- //
const nav = document.createElement('nav');
nav.classList.add('navbar');
nav.innerHTML = `<div class="navbar-brand">
            <a href="index.html"><img src="images/logo.png" alt="logo"></a>
        </div>
        <div class="navbar-toggle" id="mobile-menu">
            <i class="fa-solid fa-bars"></i>
        </div>
        <ul class="navbar-links" id="navbar-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li class="login-btn"><i class="fa-solid fa-arrow-right-to-bracket"></i>login</li>
        </ul>`;

document.querySelector('body').prepend(nav);

// ---------------------------------- LOGIN POPUP USING JS --------------------------------------- //
document.querySelector('.popup-outer').innerHTML = `<div id="loginModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Login to start learning</h2>
                <form>
                    <label for="loginEmail">Your Email</label>
                    <input type="email" id="loginEmail" name="email" placeholder="Email" required>

                    <label for="loginPassword">Your Password</label>
                    <input type="password" id="loginPassword" name="password" placeholder="Password" required>

                    <button type="submit">Login</button>

                    <p><a href="#" id="switchToSignup">Sign Up</a><a href="#">Forgot password?</a></p>
                </form>
            </div>
        </div>

        <!-- Signup Popup -->
        <div id="signupModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>Sign Up to Easy To Search</h2>
                <form>
                    <label for="signupEmail">Email</label>
                    <input type="email" id="signupEmail" name="email" placeholder="Email" required>

                    <label for="signupUsername">Username</label>
                    <input type="text" id="signupUsername" name="username" placeholder="User Name" required>

                    <label for="signupPassword">Password</label>
                    <input type="password" id="signupPassword" name="password" placeholder="Password" required>

                    <button type="submit">Sign Up</button>

                    <p> <a href="#" id="switchToLogin">Login with your account</a><a href="#">Forgot Password?</a></p>
                </form>
            </div>
        </div>`;

// --------------------------------  TO SHOW THE LOGIN POPUP USING JS ----------------------------------- //
const loginBtn = document.querySelector('.navbar ul .login-btn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeBtns = document.querySelector(".close");


loginBtn.addEventListener('click', () => {
    loginModal.style.opacity = '1';
    loginModal.style.zIndex = '5';
    loginModal.style.transform = 'scale(100%)';
});

// Switch between login and signup
document.getElementById("switchToSignup").onclick = function (e) {
    e.preventDefault();
    signupModal.style.opacity = "1";
    signupModal.style.zIndex = '5';
    signupModal.style.transform = 'scale(100%)';
    loginModal.style.opacity = "0";
    loginModal.style.zIndex = '-1';
    loginModal.style.transform = 'scale(50%)';
};

document.getElementById("switchToLogin").onclick = function (e) {
    e.preventDefault();
    loginModal.style.opacity = "1";
    loginModal.style.zIndex = '5';
    loginModal.style.transform = 'scale(100%)';
    signupModal.style.opacity = "0";
    signupModal.style.zIndex = '-1';
    signupModal.style.transform = 'scale(50%)';
};
closeBtns.addEventListener('click', () => {
    loginModal.style.opacity = '0';
    loginModal.style.zIndex = '-1';
    loginModal.style.transform = 'scale(50%)';
    signupModal.style.opacity = '0';
    signupModal.style.zIndex = '-1';
    signupModal.style.transform = 'scale(50%)';
})


// Close modal if user clicks outside content
window.onclick = function (event) {
    if (event.target == loginModal || event.target == signupModal) {
        loginModal.style.opacity = '0';
        loginModal.style.zIndex = '-1';
        loginModal.style.transform = 'scale(50%)';
        signupModal.style.opacity = '0';
        signupModal.style.zIndex = '-1';
        signupModal.style.transform = 'scale(50%)';
    }
};


// ---------------------------------- ADD FOOTER USING JS --------------------------------------- //
const footer = document.createElement('footer');
footer.classList.add('footer-section');
footer.innerHTML = `<div class="footer-container">
            <div class="footer-row">
                <!-- Company Info -->
                <div class="footer-col">
                    <h3>Easy To Search</h3>
                    <p>Your go-to platform for finding the best online courses and educational tools. Discover top
                        resources and begin your learning journey now.</p>
                </div>
                <!-- Quick Links -->
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <!-- Social Media Links -->
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <li><a href="#"><i class="fab fa-facebook-f"></i> facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> twitter</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> instagram</a></li>
                        <li><a href="#"><i class="fab fa-linkedin-in"></i> linkedin</a></li>
                    </div>
                </div>
                <!-- Newsletter Subscription -->
                <div class="footer-col">
                    <h4>Subscribe to Our Newsletter</h4>
                    <form id="newsletter-form" class="newsletter-form">
                        <input type="email" id="newsletter-email" placeholder="Enter your email">
                        <button type="submit">Subscribe</button>
                    </form>
                    <p id="newsletter-response"></p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Easy To Search. All rights reserved.</p>
        </div>`;

document.querySelector('body').insertAdjacentElement('beforeend', footer);

// ---------------------------------- FOOTER SUBSCRIPTION SECTION  --------------------------------------- //
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('newsletter-email').value.trim();
    const responseMessage = document.getElementById('newsletter-response');

    if (email.length === 0) {
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

// ---------------------------------- ADD CLASS SCROLLED ON SCROLL USING JS --------------------------------------- //
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Change 100 to your desired scroll distance
        navbar.style.position = "fixed"
        navbar.classList.add('scrolled');
    } else {
        navbar.style.position = "absolute"
        navbar.classList.remove('scrolled');
    }
});

// --------------------- RESPONSIVE NAVIGATION (MENU BAR) BAR USING JS ---------------------------- //
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.getElementById('navbar-links');
const icon = mobileMenu.querySelector('#mobile-menu i');

// ---------------------------------- CLICK EVENT ON OUTSIDE OF NAVLINKS ----------------------------- //
document.addEventListener('click', (e) => {
    if (mobileMenu.contains(e.target)) {
        navbarLinks.classList.toggle('open');
        icon.classList.toggle('fa-xmark');
    } else if (!navbarLinks.contains(e.target)) {
        icon.classList.remove('fa-xmark');
        navbarLinks.classList.remove('open');
    }
});


// ---------------------------------- HIDE NAV LINKS ON MOBILES  --------------------------------------- //
window.addEventListener('scroll', () => {
    icon.classList.remove('fa-xmark');
    navbarLinks.classList.remove('open');
});


// ---------------------------------- GET THE CURRENT PATH AND ADD UNDERLINE TO THE NAVIGATION LINKS --------------------------------------- //
const currentPath = window.location.pathname;

const navLinks = document.querySelectorAll('.navbar-links li a');

navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
        link.classList.add('underline');
    } else {
        link.classList.remove('underline');
    }
    if (currentPath === '/') {
        navLinks[0].classList.add('underline');
    }

});

// navLinks[0].classList.add('underline');

// ---------------------------------- SLIDER IN HERO SECTION --------------------------------------- //
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
            image: './images/slide1.jpg',
            title: 'Stop Searching and Start Learning: Find Knowledge Efficiently',
            description: 'Tired of browsing YouTube for courses? EasyToSearch provides direct access to handpicked, high-quality courses, organized and ready, so you can focus on learning, not searching.',
            ctaPrimary: 'Read More',
            ctaSecondary: 'Sign up'
        },
        {
            image: './images/slide2.avif',
            title: 'Your time matters. Start making the most of it now',
            description: 'No matter where your curiosity leads you, Easy to Search is here to help you learn anything and everything, effortlessly. Start exploring today!',
            ctaPrimary: 'Read More',
            ctaSecondary: 'Sign up'
        },
        {
            image: './images/slide3.jpg',
            title: 'Get Started with Easy to Search Today!',
            description: 'Why wait? Easy to Search makes learning simple and effective. Our platform helps you master new skills, enhance your career, and explore new topics quickly.',
            ctaPrimary: 'Read More',
            ctaSecondary: 'Sign up'
        }
    ];

    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    // Update background image with transition
    if (hero) {
        hero.style.backgroundImage = `url('${slides[slideIndex].image}')`;
    }

    // Hide content while transitioning
    if (heroContent) {
        heroContent.classList.remove('show');
        
        setTimeout(() => {
        heroContent.innerHTML = `
            <h1>${slides[slideIndex].title}</h1>
            <p>${slides[slideIndex].description}</p>
            <div class="cta-buttons">
            <a href="about.html" class="btn-primary">${slides[slideIndex].ctaPrimary}</a>
            <a href="#" class="btn-secondary">${slides[slideIndex].ctaSecondary}</a>
            </div>
            `;
            
            // Show content after the background transition
            heroContent.classList.add('show');
        }, 500);
    }
}

// Automatic Slideshow
setInterval(() => {
    plusSlides(1);
}, 7000);


// ---------------------------------- FAQ'S SECTION  --------------------------------------- //
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



