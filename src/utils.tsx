export const shuffleArray = (
  array: any[] //shuffle array
) => [...array].sort(() => Math.random() - 0.5);
