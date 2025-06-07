const categories = {
  bodyType: ["slim", "muscular", "tall", "short", "curvy","lanky", "hourglass", "fat", "bulky","petite", "lean", "mechanical limbs"],
  occupation: ["artist", "engineer", "chef", "detective", "teacher", "samurai","spy", "scientist","hunter","time traveler","pirate" ],
  theme: ["fantasy", "cyberpunk", "noir", "horror", "mystery"],
  gender: ["male", "female" ], 
  race: ["elf", "demon", "humanoid", "demihuman"],
};

function generateFromCategory(categoryName) {
  const list = categories[categoryName];
  if (!list) {
    console.error("Category not found!"); 
    return;
  }
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function generateDesignWords() {
  const body = generateFromCategory("bodyType");
  const job = generateFromCategory("occupation");
  const theme = generateFromCategory("theme");
  const gender =generateFromCategory("gender");
  const race = generateFromCategory ("race");
  return `${body} ${job} ${theme} ${gender} ${race}`;
}


function generateDesignPhrase() {
  const phrase = generateDesignWords();
  document.getElementById("words").textContent = phrase;
}
