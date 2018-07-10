var john = {
    fullName : "John Smith",
    mass : 92,
    height : 1.96,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}


var mark = {
    fullName: "MArk Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}


john.calcBMI();
mark.calcBMI();

console.log(john, mark)