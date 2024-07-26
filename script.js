const timeOfTheDay = document.querySelector("#heading span");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("button");

const colors = [
  "#264653",
  "#003049",
  "#c1121f",
  "#9b2226",
  "#e09f3e",
  "#323054",
  "#ed7d3a",
  "#a53860",
  "#006992",
  "#9e2a2b",
  "#432818",
  "#6f1d1b",
  "#22577a",
  "#3b28cc",
  "#264653",
  "#003049",
  "#c1121f",
  "#9b2226",
  "#e09f3e",
  "#323054",
  "#ed7d3a",
  "#a53860",
  "#006992",
  "#9e2a2b",
  "#432818",
  "#6f1d1b",
  "#22577a",
  "#3b28cc",
];

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote:
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    quote: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

setInterval(() => {
  const date = new Date();
  const currentTime = date.getHours();
  if (currentTime < 12) {
    timeOfTheDay.textContent = "morning";
  } else if (currentTime < 17) {
    timeOfTheDay.textContent = "afternoon";
  } else {
    timeOfTheDay.textContent = "night";
  }
}, 1000);

function getRandomNumber() {
  return Math.floor(Math.random() * 17 + 1);
}

function generateContent() {
  const index = getRandomNumber();
  quote.textContent = quotes[index].quote;
  author.textContent = `-${quotes[index].author}`;
  colorIndex = getRandomNumber();
  document.body.style.backgroundColor = colors[colorIndex];
  document.querySelector("#quote-section").style.color = colors[colorIndex];
  btn.style.backgroundColor = colors[colorIndex];
}

btn.addEventListener("click", generateContent);

generateContent();
