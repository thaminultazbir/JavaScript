const myNumber = [4, 1, -20, -7, 5, 9, -6];

const posNumber = removeNeg(myNumber, (x)=>x>=0)

function removeNeg(numbers, callback){
    const myArr = [];
    for(const x of numbers){
        if(callback(x)){
            myArr.push(x);
        }
    }
    return myArr;
}