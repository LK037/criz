// Sample list of upcoming matches
const matches = [
    {
        match: "India vs Australia",
        date: "25th September 2024",
        venue: "Wankhede Stadium, Mumbai"
    },
    {
        match: "England vs New Zealand",
        date: "30th September 2024",
        venue: "Lords, London"
    },
    {
        match: "South Africa vs West Indies",
        date: "5th October 2024",
        venue: "Centurion, South Africa"
    },
];

// Function to load matches
function loadMatches() {
    const matchList = document.getElementById('match-list');

    matches.forEach(match => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${match.match}</td>
            <td>${match.date}</td>
            <td>${match.venue}</td>
        `;

        matchList.appendChild(row);
    });
}

// Load matches on page load
window.onload = loadMatches;
