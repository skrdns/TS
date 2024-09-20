interface Payable {
    pay(): void;
}

abstract class Employee {
    protected name: string;
    protected age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    abstract getAnnualBonus(): number; //абстр. метод для розрахунку річного бонусу
}

//developer реалізує інтерфейс payable
class Developer extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.10; //бонус 10% від зарплати
    }

    pay(): void {
        console.log(`${this.name} has been paid.`);
    }
}

//manager реалізує інтерфейс payable
class Manager extends Employee implements Payable {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    getAnnualBonus(): number {
        return this.salary * 0.20; //бонус 20% від зарплати
    }

    pay(): void {
        console.log(`${this.name} has been paid.`);
    }
}

const employees: Employee[] = [
    new Developer("Alice", 30, 60000),
    new Developer("Bob", 25, 50000),
    new Manager("Charlie", 40, 80000),
    new Manager("Dana", 35, 75000)
];

//загальна річна суму бонусів
let totalAnnualBonus = 0;

for (const employee of employees) {
    totalAnnualBonus += employee.getAnnualBonus();
}

console.log(`Total Annual Bonus: ${totalAnnualBonus}`);
