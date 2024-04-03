const myObj = {
    fname:"Asif",
    age: 25,
    cars:[
        {name:"Toyota", models:["Supra","Mark ||", "Cheaser"]},
        {name:"Nissan", models:["R34","Silvia s15", "Fairy laddy"]},
        {name:"Honda", models:["Fiyero","Civic", "Accord"]},
    ]
};

for(let x in myObj.cars){
    console.log("The SBU name of Car is "+myObj.cars[x].name)

    for(let y in myObj.cars[x].models){
        console.log("The Model of this Car is "+myObj.cars[x].models[y]);
    }
    console.log("\t")
}