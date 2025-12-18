// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars when scrolling into view
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        const skillPosition = skill.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (skillPosition < screenPosition) {
            const width = skill.getAttribute('data-width');
            skill.style.width = width;
        }
    });
}

// Initialize skill bars to 0 width
document.querySelectorAll('.skill-level').forEach(skill => {
    skill.style.width = '0';
});

// Trigger skill bar animation on scroll and load
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Add subtle parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Video placeholder click to play demo (simulated)
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', function() {
        alert('In a real implementation, this would play your culinary skills video. To add your video:\n1. Replace the video-placeholder div with a video tag\n2. Add your video file (MP4/WebM format)\n3. Add a thumbnail image for the poster attribute');
    });
}

// Add active class to current section in navigation
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active-nav');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active-nav');
        }
    });
}

// Add CSS for active navigation
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active-nav {
        color: var(--accent-color) !important;
    }
    .nav-links a.active-nav:after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Call the function on scroll
window.addEventListener('scroll', highlightCurrentSection);

// Initialize the function on page load
window.addEventListener('load', highlightCurrentSection);