import { PI, Person, getRandomNumber } from "./imports";

let username: string = "yair";
let age: number = 21;

let arrNumber: number[] = [];

let arrString: string[] = [];

let arrAny: any[] = [];

let tuplePlayer: [string, number, boolean] = ["yair", 21, true];

let players: [number, string][];
players = [
  [1, "yair"],
  [2, "master"],
];
// type inference
let myVar;
let myVar1 = "";
let myVar2 = 2;

// union types
let myVar3: string | number | null;
myVar3 = 1;

const user: Person = {
  id: 2,
  name: "John",
};
console.log(getRandomNumber());
