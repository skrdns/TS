abstract class Car {
    protected brand: string;
    protected model: string;
    protected year: number;
    private mileage: number;

    constructor(brand: string, model: string, year: number, mileage: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    abstract getDescription(): void; //абстр. метод який повинен бути реалізований у похідних класах

    protected displayInfo(): void {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Mileage: ${this.mileage} km`);
    }
}

//sedan реалізує інтерфейс car
class Sedan extends Car {
    private trunkSpace: number; //private властивість для об'єму багажника

    constructor(brand: string, model: string, year: number, mileage: number, trunkSpace: number) {
        super(brand, model, year, mileage);
        this.trunkSpace = trunkSpace;
    }

    getDescription(): void {
        this.displayInfo();
        console.log(`Trunk Space: ${this.trunkSpace} liters`);
    }
}

//suv реалізує інтерфейс car
class SUV extends Car {
    private allWheelDrive: boolean; //приватна властивість для приводу 4х4

    constructor(brand: string, model: string, year: number, mileage: number, allWheelDrive: boolean) {
        super(brand, model, year, mileage);
        this.allWheelDrive = allWheelDrive;
    }

    getDescription(): void {
        this.displayInfo();
        console.log(`All-Wheel Drive: ${this.allWheelDrive ? "Yes" : "No"}`);
    }
}

//truck реалізує інтерфейс car
class Truck extends Car {
    private cargoCapacity: number; //приватна властивість для вантажопідйомності

    constructor(brand: string, model: string, year: number, mileage: number, cargoCapacity: number) {
        super(brand, model, year, mileage);
        this.cargoCapacity = cargoCapacity;
    }

    getDescription(): void {
        this.displayInfo();
        console.log(`Cargo Capacity: ${this.cargoCapacity} kg`);
    }
}

const sedan1 = new Sedan("Toyota", "Camry", 2020, 15000, 500);
const sedan2 = new Sedan("Honda", "Accord", 2019, 20000, 450);

const suv1 = new SUV("Ford", "Explorer", 2021, 10000, true);
const suv2 = new SUV("Chevrolet", "Tahoe", 2022, 5000, false);

const truck1 = new Truck("Volvo", "FH", 2018, 60000, 30000);
const truck2 = new Truck("Scania", "R500", 2019, 50000, 28000);

sedan1.getDescription();
console.log("---");
sedan2.getDescription();
console.log("---");
suv1.getDescription();
console.log("---");
suv2.getDescription();
console.log("---");
truck1.getDescription();
console.log("---");
truck2.getDescription();
