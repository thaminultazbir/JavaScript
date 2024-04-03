const person ={
    fname: "Asif",
    lname: "Tazbir",
    age: 25
};
let txt = "";
for (let x in person){
    txt += person[x]+" ";
}

console.log(txt)