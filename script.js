  // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle hamburger animation
            const spans = mobileMenu.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
                const spans = mobileMenu.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('active'));
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= (sectionTop - 100)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Prevent zoom on mobile for inputs
        document.addEventListener('touchstart', function() {}, {passive: true});

        // Handle orientation change
        window.addEventListener('orientationchange', function() {
            // Force redraw for mobile browsers
            document.body.style.display = 'none';
            setTimeout(() => {
                document.body.style.display = 'block';
            }, 10);
        });

        // Touch-friendly hover effects
        document.addEventListener('touchstart', function() {}, true);

        // Prevent context menu on mobile
        document.addEventListener('contextmenu', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
            }
        }, false);

        // Load animation
        document.addEventListener('DOMContentLoaded', function() {
            // Add loading animation
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 50);
            
            // Add animation to elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            }, observerOptions);

            // Observe elements
            document.querySelectorAll('.hero-title, .hero-subtitle, .hero-text, .btn, .profile-img, .project-card').forEach(el => {
                observer.observe(el);
            });
        });

        // Handle mobile keyboard appearance
        let viewport = document.querySelector("meta[name=viewport]");
        window.addEventListener('resize', function() {
            if (window.visualViewport) {
                viewport.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1");
            }
        });