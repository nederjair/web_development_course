function getRandomIntInclusive(min, max) {
  // Ensure min and max are integers
  min = Math.ceil(min);
  max = Math.floor(max);
  // Generate a random integer within the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const words = ["pizza", "tapenade", "pasta", "borsh"];
