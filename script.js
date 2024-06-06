"use strict";

class Animal {
    #speed;
    constructor (name, eat, legs, speed) {
        this.name = name;
        this.eat = eat;
        this.legs = legs;
        this.#speed = speed;
    }
    run() {
        console.log(`This ${this.name} runs with its ${this.legs} legs.`);
    }

    hunting() {
        console.log(`${this.name} loves to hunt and eat ${this.eat}.`);
    }

    showSpeed() {
        console.log(`${this.name} reaches a speed of ${this.#speed} km/h.`);
    }
}

class BigCat extends Animal {
    #category;
    constructor (name, eat, legs, speed, category) {
        super(name, eat, legs, speed);
        this.#category = category;
    }
    
    getPredator() {
        console.log(`The ${this.name} has the ${this.#category} category.`);
    }
}

class Lion extends BigCat {
    #weight;
    constructor (name, eat, legs, speed, category, weight) {
        super(name, eat, legs, speed, category);
        this.#weight = weight;
    }

    getWeight() {
        console.log(`The ${this.name} is very large and fat, weighing up to ${this.#weight} kg.`);
    }
}

class Tiger extends BigCat {
    #country;
    constructor (name, eat, legs, speed, category, country) {
        super(name, eat, legs, speed, category);
        this.#country = country;
    }

    showCountryAnimal() {
        console.log(`The ${this.name} eats ${this.eat} and lives in ${this.#country}.`);
    }
}

const lion = new Lion("Lion", "meat", 4, 80, "Predator", 500);
lion.run();
lion.hunting();
lion.showSpeed();

lion.getPredator();

lion.getWeight();

const tiger = new Tiger("Tiger", "meat", 4, 65, "Predator", "India");
tiger.run();
tiger.hunting();
tiger.showSpeed();

tiger.getPredator();

tiger.showCountryAnimal();