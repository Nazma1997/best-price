const array = ['apple', 'banana', 'orange', 'grape', 'mango', 'strawberry', 'kiwi', 'pineapple'];

// Create a copy of the original array
const shuffledArray = [...array];

// Shuffle the array using the Fisher-Yates algorithm
for (let i = shuffledArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
}

// Take the first 5 elements from the shuffled array
const randomItems = shuffledArray.slice(0, 5);

console.log(randomItems);