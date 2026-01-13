document.addEventListener('DOMContentLoaded', () => {
    console.log('K-pop World Loaded (Tailwind Edition)');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add any complex interaction logic here
});
