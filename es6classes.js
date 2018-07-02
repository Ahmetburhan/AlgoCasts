function Car(options) {
    this.title = options.title;
}
Car.prototype.drive = function () {
    return "vroom"
}

function Toyota(options) {
    this.color = options.color;
}

const toyota = new Toyota({ color: "red", title: "daily driver" })
toyota


class Car {
    constructor({ title }) {
        this.title = title;

    }
    drive() {
        return "vroom";
    }
}

const car = new Car({ title: "Toyota" });
car.drive()

car



class Car {
    constructor({ title }) {
        this.title = title;

    }
    drive() {
        return "vroom";
    }
}



class Toyota {
    constructor({ color }) {
        this.color = color;
    }

    honk() {
        return "beep";
    }
}

const toyota = new Toyota({ color: "red" });
"---"

toyota.honk();
toyota;