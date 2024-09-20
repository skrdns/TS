var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, year, mileage) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }
    Car.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand));
        console.log("Model: ".concat(this.model));
        console.log("Year: ".concat(this.year));
        console.log("Mileage: ".concat(this.mileage, " km"));
    };
    return Car;
}());
//sedan реалізує інтерфейс car
var Sedan = /** @class */ (function (_super) {
    __extends(Sedan, _super);
    function Sedan(brand, model, year, mileage, trunkSpace) {
        var _this = _super.call(this, brand, model, year, mileage) || this;
        _this.trunkSpace = trunkSpace;
        return _this;
    }
    Sedan.prototype.getDescription = function () {
        this.displayInfo();
        console.log("Trunk Space: ".concat(this.trunkSpace, " liters"));
    };
    return Sedan;
}(Car));
//suv реалізує інтерфейс car
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(brand, model, year, mileage, allWheelDrive) {
        var _this = _super.call(this, brand, model, year, mileage) || this;
        _this.allWheelDrive = allWheelDrive;
        return _this;
    }
    SUV.prototype.getDescription = function () {
        this.displayInfo();
        console.log("All-Wheel Drive: ".concat(this.allWheelDrive ? "Yes" : "No"));
    };
    return SUV;
}(Car));
//truck реалізує інтерфейс car
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, year, mileage, cargoCapacity) {
        var _this = _super.call(this, brand, model, year, mileage) || this;
        _this.cargoCapacity = cargoCapacity;
        return _this;
    }
    Truck.prototype.getDescription = function () {
        this.displayInfo();
        console.log("Cargo Capacity: ".concat(this.cargoCapacity, " kg"));
    };
    return Truck;
}(Car));
var sedan1 = new Sedan("Toyota", "Camry", 2020, 15000, 500);
var sedan2 = new Sedan("Honda", "Accord", 2019, 20000, 450);
var suv1 = new SUV("Ford", "Explorer", 2021, 10000, true);
var suv2 = new SUV("Chevrolet", "Tahoe", 2022, 5000, false);
var truck1 = new Truck("Volvo", "FH", 2018, 60000, 30000);
var truck2 = new Truck("Scania", "R500", 2019, 50000, 28000);
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
