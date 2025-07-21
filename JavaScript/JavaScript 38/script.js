// In JavaScript, Object-Oriented Programming (OOP) follows the same four main principles as other OOP languages like Java or C++. Here's a clear explanation of each:

// ---

// ### **1. Abstraction**

// **Definition:**
// Abstraction means hiding the complex implementation details and showing only the essential features of an object.

// **In JavaScript:**
// You can achieve abstraction using **functions, classes, and modules**. JavaScript doesn't have true private methods like some languages, but **`#privateFields`** and closures help achieve abstraction.

// **Example:**


class Car {
    #engineStatus = false; // private field

    startEngine() {
        this.#engineStatus = true;
        console.log("Engine started");
    }

    drive() {
        if (this.#engineStatus) {
            console.log("Driving the car");
        } else {
            console.log("Start the engine first");
        }
    }
}

const myCar = new Car();
myCar.drive();         // Start the engine first
myCar.startEngine();   // Engine started
myCar.drive();         // Driving the car


// > 🔐 The `#engineStatus` is **hidden** from the outside world — this is abstraction.

// ---

// ### **2. Encapsulation**

// **Definition:**
// Encapsulation means **bundling data and methods** that operate on that data into a single unit (object), and **restricting direct access** to some components.

// **In JavaScript:**
// You encapsulate with **classes** and **closures**, and use **private fields/methods** with `#`.

// **Example:**


class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance);     // ❌ Error: Private field


// > 🛡️ The `#balance` is encapsulated — users can't change it directly.

// ---

// ### **3. Inheritance**

// **Definition:**
// Inheritance is the process where one class **inherits properties and methods** from another class.

// **In JavaScript:**
// Use the `extends` keyword to inherit from another class.

// **Example:**


class Animal {
    speak() {
        console.log("Animal speaks");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.speak(); // Dog barks


// > 🧬 `Dog` inherits `speak()` from `Animal` and overrides it — that's inheritance.

// ---

// ### **4. Polymorphism**

// **Definition:**
// Polymorphism means **one interface, many forms** — same method name behaves differently based on the object.

// **In JavaScript:**
// Polymorphism is implemented via **method overriding** and **dynamic typing**.

// **Example:**


class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

const shapes = [new Circle(3), new Square(4)];

shapes.forEach(shape => {
    console.log(shape.area()); // Different output for Circle and Square
});


// > 🎭 Even though all are `Shape`, they behave differently when calling `area()` — that's polymorphism.

// ---

// ### 🧠 Summary Table:

// | Concept       | Description                                  | JavaScript Example                |
// | ------------- | -------------------------------------------- | --------------------------------- |
// | Abstraction   | Hides internal details                       | Private fields, modules           |
// | Encapsulation | Restricts access to internal state           | `#privateFields`, getters/setters |
// | Inheritance   | Child class gets features of parent          | `class Dog extends Animal`        |
// | Polymorphism  | One method behaves differently in subclasses | Method overriding like `area()`   |

