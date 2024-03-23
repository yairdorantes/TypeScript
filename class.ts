class Person {
  protected city = "Toluca";
  private contry = "Mexico";
  public zone = "Centro";
  constructor() {}
  greet(): void {
    console.log("hello!");
  }
}

class Employee extends Person {
  constructor(
    private readonly id: number,
    private name: string,
    private depto: string
  ) {
    super();
    this.showInfo();
  }
  showInfo(): void {
    console.log(`${this.name}`);
  }
}

const emp = new Employee(1, "yair", "development");
