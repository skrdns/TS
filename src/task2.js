//circle реалізує інтерфейс shape
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
//rectangle реалізує інтерфейс shape
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
//triangle реалізує інтерфейс shape
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.getArea = function () {
        //обчисл площі трикутника
        var s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.a + this.b + this.c;
    };
    Triangle.prototype.scale = function (factor) {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    };
    return Triangle;
}());
//масив об'єктів shape
var shapes = [
    new Circle(5),
    new Rectangle(10, 20),
    new Triangle(3, 4, 5)
];
var totalArea = 0;
var totalPerimeter = 0;
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}
console.log("Total Area: ".concat(totalArea));
console.log("Total Perimeter: ".concat(totalPerimeter));
