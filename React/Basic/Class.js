class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar1 =new Car("Audi", 2018)
//const myCar2 = new Car("BMW", 2015)

// console.log(myCar1.name)
// console.log(myCar2.name)

console.log("This "+myCar1.name+" is "+myCar1.age()+" years old");