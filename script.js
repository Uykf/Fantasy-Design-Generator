const categories = {
  gender: ["male", "female" ],
  race: ["elf", "demon", "human", "demihuman", "alien", "vampire", "orc"],
  theme: ["fantasy", "cyberpunk", "noir", "horror", "mystery", ],
  bodyType: ["slim", "muscular", "tall", "short", "curvy","lanky", "hourglass", "fat", "bulky","petite", "lean"],
  occupation: ["artist", "engineer", "chef", "detective", "teacher", "samurai","spy", "scientist","hunter","time traveler","pirate", "hacker"],
};

const blacklist = [];


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
  let combo;
  let attempts = 0;
  const maxAttempts = 20; // prevent infinite loops just in case
  
  do {
    const gender =generateFromCategory("gender");
    const race = generateFromCategory ("race");
    const theme = generateFromCategory("theme");
    const body = generateFromCategory("bodyType");
    const job = generateFromCategory("occupation");
  return `${gender} ${race} ${theme} ${body} ${job}`;

  
    combo = `${gender} ${race} ${theme} ${body} ${job}`;
    attempts++;
  } while (blacklist.includes(combo) && attempts < maxAttempts);

  // Add to blacklist and trim it to last 3
  blacklist.push(combo);
  if (blacklist.length > 3) blacklist.shift();

  return combo;
}

function generateDesignPhrase() {
  const phrase = generateDesignWords();
  document.getElementById("words").textContent = phrase;
}