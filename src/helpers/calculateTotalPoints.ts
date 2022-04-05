/**
 * Calculates the total points to be added to the game score.
 *
 * @param difficulty - The game difficulty.
 * @param quantity - The total of game buttons.
 * @param shapesLength - The total of button shapes.
 * @returns The number of total points.
 */
const calculateTotalPoints = (
  difficulty: string,
  quantity: number,
  shapesLength: number
) => {
  const difficultyIncMap = {
    Easy: 50,
    Normal: 100,
    Hard: 300,
  };

  const quantityIncMap = {
    4: 10,
    9: 60,
  };

  const shapesIncMap = {
    1: 5,
    2: 10,
    3: 20,
    4: 25,
  };

  const increment1 =
    difficultyIncMap[difficulty as keyof typeof difficultyIncMap];

  const increment2 = quantityIncMap[quantity as keyof typeof quantityIncMap];

  const increment3 = shapesIncMap[shapesLength as keyof typeof shapesIncMap];

  return increment1 + increment2 + increment3;
};

export default calculateTotalPoints;
