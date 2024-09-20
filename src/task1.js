//кіт
var Cat = /** @class */ (function () {
    function Cat(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " is walking."));
    };
    Cat.prototype.sound = function () {
        return "Meow";
    };
    return Cat;
}());
//птиця
var Bird = /** @class */ (function () {
    function Bird(name, age, wingspan) {
        this.name = name;
        this.age = age;
        this.wingspan = wingspan;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " is flying."));
    };
    Bird.prototype.sound = function () {
        return "Tweet";
    };
    return Bird;
}());
//риба
var Fish = /** @class */ (function () {
    function Fish(name, age, waterType) {
        this.name = name;
        this.age = age;
        this.waterType = waterType;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " is swimming."));
    };
    Fish.prototype.sound = function () {
        return "Blub";
    };
    return Fish;
}());
var cat = new Cat("Whiskers", 2, "gray");
cat.move();
console.log(cat.sound());
var bird = new Bird("Tweety", 1, 25);
bird.move();
console.log(bird.sound());
var fish = new Fish("Goldie", 3, "freshwater");
fish.move();
console.log(fish.sound());
