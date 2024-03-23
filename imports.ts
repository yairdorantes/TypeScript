const PI: number = 3.1416;

interface Person {
  id: number;
  name: string;
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 100);
}

export { PI, Person, getRandomNumber };
