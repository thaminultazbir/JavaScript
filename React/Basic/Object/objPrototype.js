function Person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

Person.prototype.name = function(){
    return this.firstName+" "+this.lastName;
}

const myFather = new Person("John", "Doe", 50, "Black");

console.log(myFather.name());