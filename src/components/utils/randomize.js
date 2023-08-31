export const shuffle = (arr) => {
  // Only grab the last cards
  const shuffledCards = [...arr.slice(1)];

  // Shuffle them using Fisher-Yates Algorithm
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  // Push the first card in the parameters
  shuffledCards.push(arr[0]);

  return shuffledCards;
};
