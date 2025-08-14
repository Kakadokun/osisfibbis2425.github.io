// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        }
    });
});

// Schedule Tabs
const tabButtons = document.querySelectorAll('.tab-button');
const daySchedules = document.querySelectorAll('.day-schedule');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const day = this.getAttribute('data-day');
        
        // Remove active class from all buttons and schedules
        tabButtons.forEach(btn => btn.classList.remove('active'));
        daySchedules.forEach(schedule => schedule.classList.remove('active'));
        
        // Add active class to clicked button and corresponding schedule
        this.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// Simple AOS (Animate On Scroll) Implementation
function checkAOS() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('aos-animate');
        }
    });
}

// Initialize AOS check on load and scroll
window.addEventListener('load', checkAOS);
window.addEventListener('scroll', checkAOS);

// Mobile Menu Toggle (for responsive design)
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

const headerContent = document.querySelector('.header-content');
headerContent.appendChild(menuToggle);

const navMenu = document.querySelector('.nav-menu');
const mobileMenu = document.createElement('div');
mobileMenu.classList.add('mobile-menu');
mobileMenu.innerHTML = navMenu.innerHTML;
document.body.appendChild(mobileMenu);

menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Add decorative elements dynamically
function addDecorations() {
    const decorations = ['monas', 'candi', 'wayang', 'borobudur', 'prambanan'];
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const numDecorations = Math.floor(Math.random() * 2) + 1;
        
        for (let i = 0; i < numDecorations; i++) {
            const decorType = decorations[Math.floor(Math.random() * decorations.length)];
            const decor = document.createElement('div');
            decor.className = `decor decor-${decorType}`;
            
            // Random position
            const left = Math.random() * 90 + 5;
            const top = Math.random() * 80 + 10;
            
            decor.style.left = `${left}%`;
            decor.style.top = `${top}%`;
            
            // Random size
            const size = Math.random() * 50 + 30;
            decor.style.width = `${size}px`;
            decor.style.height = `${size}px`;
            
            // Random rotation
            const rotation = Math.random() * 360;
            decor.style.transform = `rotate(${rotation}deg)`;
            
            // Random animation delay
            const delay = Math.random() * 5;
            decor.style.animationDelay = `${delay}s`;
            
            section.appendChild(decor);
        }
    });
}

// Initialize decorations
addDecorations();