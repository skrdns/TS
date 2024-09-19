function greet(name: string, count: number = 1): void {
    for (let i = 0; i < count; i++) {
      console.log(`Hello, ${name}!`);
    }
  }
  
  greet("Denys"); //використає значення за замовчуванням для count (1)
  greet("Sikora", 3); //використає передане значення (3)  