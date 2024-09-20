interface Animal {
    name: string;
    age: number;
    move(): void; //метод пересування
    sound(): string; //метод повернення звуків які видає тварина
    color?: string; //опціональна властивість для кольору
    wingspan?: number; //опціональна властивість для розмаху крил
    waterType?: string; //опціональна властивість для типу води
}

//кіт
class Cat implements Animal {
    name: string;
    age: number;
    color?: string; //опціональна властивість кольору

    constructor(name: string, age: number, color?: string) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    move(): void {
        console.log(`${this.name} is walking.`);
    }

    sound(): string {
        return "Meow";
    }
}

//птиця
class Bird implements Animal {
    name: string;
    age: number;
    wingspan?: number; //опціональна властивість розмаху крил

    constructor(name: string, age: number, wingspan?: number) {
        this.name = name;
        this.age = age;
        this.wingspan = wingspan;
    }

    move(): void {
        console.log(`${this.name} is flying.`);
    }

    sound(): string {
        return "Tweet";
    }
}

//риба
class Fish implements Animal {
    name: string;
    age: number;
    waterType?: string; //опціональна властивість для типу води

    constructor(name: string, age: number, waterType?: string) {
        this.name = name;
        this.age = age;
        this.waterType = waterType;
    }

    move(): void {
        console.log(`${this.name} is swimming.`);
    }

    sound(): string {
        return "Blub";
    }
}

const cat = new Cat("Whiskers", 2, "gray");
cat.move();
console.log(cat.sound());

const bird = new Bird("Tweety", 1, 25);
bird.move();
console.log(bird.sound());

const fish = new Fish("Goldie", 3, "freshwater");
fish.move();
console.log(fish.sound());
