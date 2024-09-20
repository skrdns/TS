interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

//circle реалізує інтерфейс shape
class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

//rectangle реалізує інтерфейс shape
class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

//triangle реалізує інтерфейс shape
class Triangle implements Shape {
    private a: number;
    private b: number;
    private c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(): number {
        //обчисл площі трикутника
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    getPerimeter(): number {
        return this.a + this.b + this.c;
    }

    scale(factor: number): void {
        this.a *= factor;
        this.b *= factor;
        this.c *= factor;
    }
}

//масив об'єктів shape
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(10, 20),
    new Triangle(3, 4, 5)
];

let totalArea = 0;
let totalPerimeter = 0;

for (const shape of shapes) {
    totalArea += shape.getArea();
    totalPerimeter += shape.getPerimeter();
}

console.log(`Total Area: ${totalArea}`);
console.log(`Total Perimeter: ${totalPerimeter}`);
