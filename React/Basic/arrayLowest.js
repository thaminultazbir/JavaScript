myArr = [7,18,45,4,13]

minValue = myArr[0];
for(let i in myArr){
    if(myArr[i] < minValue){
        minValue = myArr[i];
    }
}

console.log("The minimum Value of this Array is: "+minValue);