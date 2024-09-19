function calculateIceCreamPrice(): void {
    //розмір
    const SMALL_CUP_PRICE = 10;
    const LARGE_CUP_PRICE = 25;

    //начинка
    const CHOCOLATE_PRICE = 5;
    const CARAMEL_PRICE = 6;
    const BERRIES_PRICE = 10;

    //вартість додаткових інгредієнтів
    const MARSHMALLOW_PRICE = 5;

    const sizeInput = prompt("Виберіть розмір морозива: маленький (10 грн) або великий (25 грн)");
    if (sizeInput === null) {
        console.log("Розмір морозива не вибрано.");
        return;
    }
    const size = sizeInput.toLowerCase();
    let price = 0;

    if (size === "маленький") {
        price += SMALL_CUP_PRICE;
    } else if (size === "великий") {
        price += LARGE_CUP_PRICE;
    } else {
        console.log("Невірний розмір морозива.");
        return;
    }

    const toppingsInput = prompt("Виберіть начинку (можна вибрати кілька, розділяючи комою): шоколад (+5 грн), карамель (+6 грн), ягоди (+10 грн)");
    if (toppingsInput === null) {
        console.log("Начинка не вибрана.");
        return;
    }
    let toppings = toppingsInput.toLowerCase().split(",").map(t => t.trim());

    toppings = toppings.filter(t => t !== "");

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

    const addMarshmallowInput = prompt("Чи хочете додати маршмелоу? Так/Ні");
    if (addMarshmallowInput !== null && addMarshmallowInput.toLowerCase() === "так") {
        price += MARSHMALLOW_PRICE;
    }

    console.log(`Загальна вартість вашого морозива: ${price} грн.`);
}

calculateIceCreamPrice();