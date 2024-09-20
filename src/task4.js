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
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
//developer реалізує інтерфейс payable
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Developer.prototype.getAnnualBonus = function () {
        return this.salary * 0.10; //бонус 10% від зарплати
    };
    Developer.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Developer;
}(Employee));
//manager реалізує інтерфейс payable
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, salary) {
        return _super.call(this, name, age, salary) || this;
    }
    Manager.prototype.getAnnualBonus = function () {
        return this.salary * 0.20; //бонус 20% від зарплати
    };
    Manager.prototype.pay = function () {
        console.log("".concat(this.name, " has been paid."));
    };
    return Manager;
}(Employee));
var employees = [
    new Developer("Alice", 30, 60000),
    new Developer("Bob", 25, 50000),
    new Manager("Charlie", 40, 80000),
    new Manager("Dana", 35, 75000)
];
//загальна річна суму бонусів
var totalAnnualBonus = 0;
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    totalAnnualBonus += employee.getAnnualBonus();
}
console.log("Total Annual Bonus: ".concat(totalAnnualBonus));
