const today = new Date();
const dayOfWeek = today.getDay();
if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
    const meetAndGreetBanner = document.getElementById('meetAndGreetBanner');
    meetAndGreetBanner.style.display = 'block';
    const closeBannerButton = document.getElementById('closeBannerButton');
    closeBannerButton.addEventListener('click', () => {
        meetAndGreetBanner.style.display = 'none';
    });
}
 