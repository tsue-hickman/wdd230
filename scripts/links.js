const baseURL = "https://tsue-hickman.github.io/wdd230/";
const linksURL = "https://tsue-hickman.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const nav1 = document.getElementById("nav1");

    weeks.forEach(function(week) {
        const weekAnchor = document.createElement("a");
        weekAnchor.href = baseURL + week.links[0].url;
        weekAnchor.textContent = week.week;
        nav1.appendChild(weekAnchor);
    });
}

getLinks();
