interface LibraryItem {
    title: string;
    author: string;
    borrow(): void; //метод позначення елемента як позиченого
}

//book реалізує інтерфейс libraryitem
class Book implements LibraryItem {
    title: string;
    author: string;
    private pages: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, pages: number) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`The book "${this.title}" has been borrowed.`);
        } else {
            console.log(`The book "${this.title}" is already borrowed.`);
        }
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

//magazine реалізує інтерфейс libraryitem
class Magazine implements LibraryItem {
    title: string;
    author: string;
    private issueNumber: number;
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, issueNumber: number) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`The magazine "${this.title}" has been borrowed.`);
        } else {
            console.log(`The magazine "${this.title}" is already borrowed.`);
        }
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, Issue #${this.issueNumber}`;
    }
}

//dvd реалізує інтерфейс libraryitem
class DVD implements LibraryItem {
    title: string;
    author: string;
    private duration: number; //тривалість у хвилинах
    private isBorrowed: boolean = false;

    constructor(title: string, author: string, duration: number) {
        this.title = title;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log(`The DVD "${this.title}" has been borrowed.`);
        } else {
            console.log(`The DVD "${this.title}" is already borrowed.`);
        }
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, ${this.duration} minutes`;
    }
}

//library для управління бібліотечними елементами
class Library {
    private items: LibraryItem[] = [];

    //метод для додавання елементів до бібліотеки
    addItem(item: LibraryItem): void {
        this.items.push(item);
        console.log(`Item "${item.title}" has been added to the library.`);
    }

    //метод пошуку елементів за назвою
    findItemByName(name: string): LibraryItem | undefined {
        return this.items.find(item => item.title === name);
    }

    //метод виведення списку доступних елементів
    listAvailableItems(): void {
        if (this.items.length === 0) {
            console.log("No items in the library.");
            return;
        }

        this.items.forEach(item => {
            console.log(item.getDetails());
        });
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const magazine1 = new Magazine("National Geographic", "Various", 2024);
const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

//створення бібліотеки
const library = new Library();

//додавання елементів до бібліотеки
library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

//вивід списку доступних елементів
library.listAvailableItems();

//реєструємо деякі елементи як позичені
book1.borrow();
dvd1.borrow();
book1.borrow(); //спроба позичити вже позичену книгу

//виводимо список доступних елементів знову
library.listAvailableItems();
