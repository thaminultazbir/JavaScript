const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>"
for(i=0; i<fruits.length; i++){
    text+="<li>"+fruits[i]+"</li>";
}
text+= "</ul>"

document.getElementById("demo").innerHTML = text;