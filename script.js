 // Mobile Menu Toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');

 mobileMenuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Close menu when clicking a link
 document.querySelectorAll('.nav-links a').forEach(link => {
     link.addEventListener('click', () => {
         navLinks.classList.remove('active');
     });
 });

 // Scroll to Top Button
 const scrollToTopBtn = document.querySelector('.scroll-to-top');

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 300) {
         scrollToTopBtn.classList.add('active');
     } else {
         scrollToTopBtn.classList.remove('active');
     }
 });

 scrollToTopBtn.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 // Header scroll effect
 const header = document.querySelector('header');

 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Form submission
 const contactForm = document.getElementById('contactForm');

 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();

     // Get form values
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;

     // Here you would typically send the form data to a server
     // For demonstration, we'll just log it and show an alert
     console.log({ name, email, subject, message });

     alert('Thank you for your message! I will get back to you soon.');
     contactForm.reset();
 });

 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();

         const targetId = this.getAttribute('href');

         if (targetId === '#') return;

         const targetElement = document.querySelector(targetId);

         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 80,
                 behavior: 'smooth'
             });
         }
     });
 });