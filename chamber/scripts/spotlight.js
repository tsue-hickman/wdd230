const spotlightsContainer = document.getElementById('spotlightAds')
const silverGoldMembers = membersData.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
const randomSpotlights = getRandomMembers(silverGoldMembers, 3);
randomSpotlights.forEach(member => {

})

