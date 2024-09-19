function greet(name, count) {
    if (count === void 0) { count = 1; }
    for (var i = 0; i < count; i++) {
        console.log("Hello, ".concat(name, "!"));
    }
}
greet("Denys"); //використає значення за замовчуванням для count (1)
greet("Sikora", 3); //використає передане значення (3)  
