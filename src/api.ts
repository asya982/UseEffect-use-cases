export const fetchDataSimulator = (): Promise<string> => {
  const catArr = [
    "Do you like cats? Of course you do",
    "Cats are the best",
    "What do you have against cats???",
  ];
  const randomIndex = Math.floor(Math.random() * 3);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(catArr[randomIndex]);
    }, 1000);
  });
};
