console.log("hello motherfucker");
interface Person {
  id: number;
  name: string;
}
interface Product {
  id: number;
  name: string;
  price: number;
}
interface Employee extends Person {
  role: string;
}

interface Data<T> {
  addItem(newItem: T): void;
}

class DataCollection<T extends { id: number; name: string }>
  implements Data<T>
{
  private items: T[] = [];
  addItem(newItem: T): void {
    this.items.push(newItem);
  }
  getItems(): void {
    console.log("list of items", JSON.stringify(this.items));
  }
  getNames(): string[] {
    return this.items.map((item) => item.name);
  }
  getItemById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

const personCollection = new DataCollection<Product>();

const newData = {
  id: 1,
  name: "Yair",
};
personCollection.addItem(newData);
personCollection.getItems();
