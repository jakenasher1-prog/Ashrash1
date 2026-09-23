const gameGrid = document.getElementById("gameGrid");
const gameCount = document.getElementById("gameCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");

let games = [];

async function loadGames() {
try {
const response = await fetch("./games.json");

if (!response.ok) {
throw new Error("Could not load games.json");
}

const data = await response.json();
games = data.games || [];

renderGames(games);
} catch (error) {
console.error(error);
gameGrid.innerHTML = "";
gameCount.textContent = "";
emptyState.textContent = "Unable to load games.";
emptyState.classList.remove("hidden");
}
}

function renderGames(list) {
gameGrid.innerHTML = "";

gameCount.textContent = `${list.length} game${list.length === 1 ? "" : "s"}`;

if (list.length === 0) {
emptyState.textContent = "No games matched your search.";
emptyState.classList.remove("hidden");
return;
}

emptyState.classList.add("hidden");

list.forEach((game) => {
const card = document.createElement("article");
card.className = "game-card";

card.innerHTML = `
<div class="game-icon">${game.icon || "🎮"}</div>
<div class="game-info">
<h3>${game.title}</h3>
<p>${game.description || ""}</p>
<div class="game-tags">
${(game.tags || [])
.map(tag => `<span>${tag}</span>`)
.join("")}
</div>
<button type="button">Play</button>
</div>
`;

card.querySelector("button").addEventListener("click", () => {
document.getElementById("dialogTitle").textContent = game.title;
document.getElementById("dialogDescription").textContent =
game.description || "";

document.getElementById("gameFrame").src = game.url;

document.getElementById("gameDialog").showModal();
});

gameGrid.appendChild(card);
});
}

searchInput.addEventListener("input", () => {
const search = searchInput.value.toLowerCase().trim();

const filtered = games.filter((game) => {
const text = [
game.title,
game.description,
...(game.tags || [])
]
.join(" ")
.toLowerCase();

return text.includes(search);
});

renderGames(filtered);
});
