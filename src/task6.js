//book реалізує інтерфейс libraryitem
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("The book \"".concat(this.title, "\" has been borrowed."));
        }
        else {
            console.log("The book \"".concat(this.title, "\" is already borrowed."));
        }
    };
    Book.prototype.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.pages, " pages");
    };
    return Book;
}());
//magazine реалізує інтерфейс libraryitem
var Magazine = /** @class */ (function () {
    function Magazine(title, author, issueNumber) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    Magazine.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("The magazine \"".concat(this.title, "\" has been borrowed."));
        }
        else {
            console.log("The magazine \"".concat(this.title, "\" is already borrowed."));
        }
    };
    Magazine.prototype.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", Issue #").concat(this.issueNumber);
    };
    return Magazine;
}());
//dvd реалізує інтерфейс libraryitem
var DVD = /** @class */ (function () {
    function DVD(title, author, duration) {
        this.isBorrowed = false;
        this.title = title;
        this.author = author;
        this.duration = duration;
    }
    DVD.prototype.borrow = function () {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            console.log("The DVD \"".concat(this.title, "\" has been borrowed."));
        }
        else {
            console.log("The DVD \"".concat(this.title, "\" is already borrowed."));
        }
    };
    DVD.prototype.getDetails = function () {
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.duration, " minutes");
    };
    return DVD;
}());
//library для управління бібліотечними елементами
var Library = /** @class */ (function () {
    function Library() {
        this.items = [];
    }
    //метод для додавання елементів до бібліотеки
    Library.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Item \"".concat(item.title, "\" has been added to the library."));
    };
    //метод пошуку елементів за назвою
    Library.prototype.findItemByName = function (name) {
        return this.items.find(function (item) { return item.title === name; });
    };
    //метод виведення списку доступних елементів
    Library.prototype.listAvailableItems = function () {
        if (this.items.length === 0) {
            console.log("No items in the library.");
            return;
        }
        this.items.forEach(function (item) {
            console.log(item.getDetails());
        });
    };
    return Library;
}());
var book1 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
var magazine1 = new Magazine("National Geographic", "Various", 2024);
var dvd1 = new DVD("Inception", "Christopher Nolan", 148);
//створення бібліотеки
var library = new Library();
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
