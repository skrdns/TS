function calculateIceCreamPrice() {
    //розмір
    var SMALL_CUP_PRICE = 10;
    var LARGE_CUP_PRICE = 25;
    //начинка
    var CHOCOLATE_PRICE = 5;
    var CARAMEL_PRICE = 6;
    var BERRIES_PRICE = 10;
    //вартість додаткових інгредієнтів
    var MARSHMALLOW_PRICE = 5;
    var sizeInput = prompt("Виберіть розмір морозива: маленький (10 грн) або великий (25 грн)");
    if (sizeInput === null) {
        console.log("Розмір морозива не вибрано.");
        return;
    }
    var size = sizeInput.toLowerCase();
    var price = 0;
    if (size === "маленький") {
        price += SMALL_CUP_PRICE;
    }
    else if (size === "великий") {
        price += LARGE_CUP_PRICE;
    }
    else {
        console.log("Невірний розмір морозива.");
        return;
    }
    var toppingsInput = prompt("Виберіть начинку (можна вибрати кілька, розділяючи комою): шоколад (+5 грн), карамель (+6 грн), ягоди (+10 грн)");
    if (toppingsInput === null) {
        console.log("Начинка не вибрана.");
        return;
    }
    var toppings = toppingsInput.toLowerCase().split(",").map(function (t) { return t.trim(); });
    toppings = toppings.filter(function (t) { return t !== ""; });
    if (toppings.length === 0) {
        console.log("Потрібно вибрати щонайменше одну начинку.");
        return;
    }
    if (toppings.includes("шоколад")) {
        price += CHOCOLATE_PRICE;
    }
    if (toppings.includes("карамель")) {
        price += CARAMEL_PRICE;
    }
    if (toppings.includes("ягоди")) {
        price += BERRIES_PRICE;
    }
    var addMarshmallowInput = prompt("Чи хочете додати маршмелоу? Так/Ні");
    if (addMarshmallowInput !== null && addMarshmallowInput.toLowerCase() === "так") {
        price += MARSHMALLOW_PRICE;
    }
    console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430: ".concat(price, " \u0433\u0440\u043D."));
}
calculateIceCreamPrice();
