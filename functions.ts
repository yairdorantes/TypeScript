function greet(name: string = "user"): void {
  console.log(`Hello ${name}`);
  //   return `Hello ${name}`;
}

greet();

function getNumber(): number {
  const sum = 7 + 7;
  console.log(sum);
  return sum;
}

getNumber();

function printPosition(position: {
  lat: number;
  long?: number | string;
}): void {
  console.log(position.lat, position.long);
}

printPosition({ lat: 1, long: 2 });
