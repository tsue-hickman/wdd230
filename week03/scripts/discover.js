// Check for last visit date and display message
document.addEventListener("DOMContentLoaded", function () {
    // Function to display the message based on time between visits
    function displayVisitMessage() {
        // Get the last visit date from localStorage
        var lastVisit = localStorage.getItem("lastVisit");

        // If this is the first visit, display a welcome message
        if (!lastVisit) {
            document.getElementById("sidebarContent").textContent = "Welcome! Let us know if you have any questions.";
        } else {
            // Calculate the time difference between visits
            var currentTime = Date.now();
            var timeDifference = currentTime - parseInt(lastVisit);
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            // Display message based on the time difference
            if (daysDifference < 1) {
                document.getElementById("sidebarContent").textContent = "Back so soon! Awesome!";
            } else {
                var message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
                document.getElementById("sidebarContent").textContent = message;
            }
        }

        // Store the current visit date in localStorage
        localStorage.setItem("lastVisit", String(Date.now()));
    }

    // Call the function to display the visit message
    displayVisitMessage();

    // Lazy loading for images
    var lazyImages = document.querySelectorAll(".lazy-image");

    // IntersectionObserver to lazy load images
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("lazy-image");
                observer.unobserve(lazyImage);
            }
        });
    });

    lazyImages.forEach(function (lazyImage) {
        observer.observe(lazyImage);
    });
});

