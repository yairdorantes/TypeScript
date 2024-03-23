// interfaces

interface Person {
  id: number;
  name: string;
}
interface Employee extends Person {
  dept: string;
}
interface Customer extends Person {
  country: string;
}

const employee: Employee = { id: 1, name: "yair", dept: "development" };
const customer: Customer = { id: 1, name: "yair", country: "mexico" };

interface Animal {
  name: string;
  getDogs: () => void;
  getCats: () => void;
}

class Zoo implements Animal {
  name = "bola";
  getDogs(): void {}
  getCats(): void {}
}
