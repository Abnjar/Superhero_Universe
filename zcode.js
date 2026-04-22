function startBattle() {
  const heroes = ["Iron Blaze", "Shadow Fang", "Aqua Storm"];
  const attacker = heroes[Math.floor(Math.random() * heroes.length)];
  const defender = heroes[Math.floor(Math.random() * heroes.length)];
  const log = document.getElementById("battleLog");
  log.innerHTML += `<p>${attacker} attacks ${defender}!</p>`;
}

function checkAnswer(hero) {
  const result = document.getElementById("quizResult");
  if (hero === "Aqua Storm") {
    result.textContent = "Correct! Aqua Storm controls water.";
  } else {
    result.textContent = "Wrong! Try again.";
  }
}let chosenHero = null;

function chooseHero(hero) {
  chosenHero = hero;
  document.getElementById("chosenHeroText").textContent = `You chose: ${hero}`;
}
function openComic(title, image, description) {
  document.getElementById("comicTitle").textContent = title;
  document.getElementById("comicImage").src = image;
  document.getElementById("comicDescription").textContent = description;
  document.getElementById("comicModal").style.display = "block";
}

function closeComic() {
  document.getElementById("comicModal").style.display = "none";
}