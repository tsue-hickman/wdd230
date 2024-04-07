document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = document.querySelectorAll('.lazy');

    // IntersectionObserver callback function
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove('lazy');
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });

    // Observing each lazy image
    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});
