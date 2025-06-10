// Arabic Food Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Play button functionality
    const playButtons = document.querySelectorAll('.play-button, .play-icon');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would trigger a video player
            alert('تشغيل الفيديو');
        });
    });

    // Dish card hover effects
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Feature card hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Category card hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Recipe card hover effects
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'all 0.3s ease';
            
            // Find the image within this card and scale it
            const img = this.querySelector('.recipe-image img');
            if (img) {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            
            // Reset image scale
            const img = this.querySelector('.recipe-image img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Featured section controls
    const nextBtn = document.querySelector('.control-btn:nth-child(1)');
    const prevBtn = document.querySelector('.control-btn:nth-child(2)');
    
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', function() {
            // In a real implementation, this would show the next featured item
            alert('العنصر التالي');
        });
        
        prevBtn.addEventListener('click', function() {
            // In a real implementation, this would show the previous featured item
            alert('العنصر السابق');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            // Add a slight delay for the animation
            setTimeout(() => {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.style.opacity = '1';
                    navbarCollapse.style.transform = 'translateY(0)';
                } else {
                    navbarCollapse.style.opacity = '0';
                    navbarCollapse.style.transform = 'translateY(-10px)';
                }
            }, 0);
        });
    }

    // Add animation to section titles when they come into view
    const sectionTitles = document.querySelectorAll('.section-title');
    
    // Simple function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to add animation class when element is in viewport
    function handleScrollAnimation() {
        sectionTitles.forEach(title => {
            if (isInViewport(title) && !title.classList.contains('animated')) {
                title.classList.add('animated');
                title.style.animation = 'fadeInUp 0.5s ease forwards';
            }
        });
    }
    
    // Add animation class on scroll
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Initial check on page load
    handleScrollAnimation();

    // Add keyframe animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Form validation for any forms added later
    const validateForm = (formElement) => {
        let isValid = true;
        
        // Get all required inputs
        const requiredInputs = formElement.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-invalid');
            }
        });
        
        return isValid;
    };

    // Add event listeners to any forms that might be added later
    document.addEventListener('submit', function(e) {
        const form = e.target;
        
        if (!validateForm(form)) {
            e.preventDefault();
            alert('يرجى ملء جميع الحقول المطلوبة');
        }
    });

    // Initialize any carousels that might be added later
    const initCarousels = () => {
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            new bootstrap.Carousel(carousel, {
                interval: 5000,
                wrap: true
            });
        });
    };

    // Call carousel initialization
    initCarousels();

    // Add a simple preloader
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    window.onload = function() {
        body.style.opacity = '1';
    };
});
