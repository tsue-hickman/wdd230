// const today = new Date();
// const dayOfWeek = today.getDay();
// if (dayOfWeek >= 1 && dayOfWeek <= 3) { // Monday to Wednesday
//     const meetAndGreetBanner = document.getElementById('meetAndGreetBanner');
//     meetAndGreetBanner.style.display = 'block';
//     const closeBannerButton = document.getElementById('closeBannerButton');
//     closeBannerButton.addEventListener('click', () => {
//         meetAndGreetBanner.style.display = 'none';
//     });
// }


const banner = document.querySelector("#meetAndGreetBanner")
const today = new Date();
const dayOfWeek = today.getDay();

if(dayOfWeek >= 1 && dayOfWeek <= 3){
    banner.style.display = "block";
}else{
    banner.style.display = "none";
}

const close = document.querySelector("#closeBannerButton")
close.addEventListener("click",()=>{
    banner.style.display = "none";
})