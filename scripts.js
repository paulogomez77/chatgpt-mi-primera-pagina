document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Handle the pet search form
    const searchForm = document.querySelector('#search form');
    searchForm.addEventListener('submit', handleSearch);

    function handleSearch(event) {
        event.preventDefault();
        const petType = document.querySelector('#pet-type').value;
        const location = document.querySelector('#location').value;

        // Replace with actual search functionality
        alert(`Buscando ${petType} en ${location}`);
    }

    // Function to cycle through testimonials
    let currentTestimonial = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        setInterval(() => {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }, 5000); // Change testimonial every 5 seconds
    }
});