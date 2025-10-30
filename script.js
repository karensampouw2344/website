const quiz = [
  {
    question: "Pilih warna favoritmu:",
    choices: ["Merah", "Biru", "Hijau", "Ungu"],
    zodiac: ["Aries", "Cancer", "Taurus", "Capricorn"]
  },
  {
    question: "Apa tipe liburanmu?",
    choices: ["Pantai", "Gunung", "Kota", "Santai di rumah"],
    zodiac: ["Leo", "Sagittarius", "Gemini", "Pisces"]
  },
  {
    question: "Pilihan hewan kesayanganmu:",
    choices: ["Kucing", "Anjing", "Burung", "Kelinci"],
    zodiac: ["Virgo", "Libra", "Aquarius", "Scorpio"]
  }
];

const zodiacInfo = {
  "Aries": {desc: "Pemberani dan penuh energi!", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Aries.svg/64px-Aries.svg.png"},
  "Taurus": {desc: "Setia dan sabar.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Taurus.svg/64px-Taurus.svg.png"},
  "Gemini": {desc: "Cerdas dan komunikatif.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Gemini.svg/64px-Gemini.svg.png"},
  "Cancer": {desc: "Emosional tapi peduli.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cancer.svg/64px-Cancer.svg.png"},
  "Leo": {desc: "Percaya diri dan karismatik.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Leo.svg/64px-Leo.svg.png"},
  "Virgo": {desc: "Rapi dan perfeksionis.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Virgo.svg/64px-Virgo.svg.png"},
  "Libra": {desc: "Diplomatis dan romantis.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Libra.svg/64px-Libra.svg.png"},
  "Scorpio": {desc: "Misterius dan intens.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Scorpio.svg/64px-Scorpio.svg.png"},
  "Sagittarius": {desc: "Petualang dan bebas.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sagittarius.svg/64px-Sagittarius.svg.png"},
  "Capricorn": {desc: "Ambisius dan disiplin.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Capricorn.svg/64px-Capricorn.svg.png"},
  "Aquarius": {desc: "Unik dan inovatif.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Aquarius.svg/64px-Aquarius.svg.png"},
  "Pisces": {desc: "Sensitif dan kreatif.", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pisces.svg/64px-Pisces.svg.png"}
};

let currentQuestion = 0;
let chosenZodiacs = [];

function showQuestion() {
  const q = quiz[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(q.zodiac[index]);
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(zodiac) {
  chosenZodiacs.push(zodiac);
  currentQuestion++;
  if(currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("choices").style.display = "none";
  document.getElementById("question").textContent = "Hasil Zodiakmu!";

  // Hitung zodiac paling sering muncul
  const counts = {};
  chosenZodiacs.forEach(z => counts[z] = (counts[z] || 0) + 1);
  const sorted = Object.entries(counts).sort((a,b) => b[1]-a[1]);
  const finalZodiac = sorted[0][0];

  const img = document.getElementById("zodiac-img");
  const desc = document.getElementById("zodiac-desc");
  img.src = zodiacInfo[finalZodiac].img;
  img.style.display = "block";
  desc.textContent = zodiacInfo[finalZodiac].desc;
  desc.style.opacity = 0;

  // animasi fade-in
  setTimeout(() => {
    desc.style.opacity = 1;
  }, 200);
}

// mulai quiz
showQuestion();
