let nInterVId;

function changeColor(){
    if(!nInterVId){
        nInterVId = setInterval(flashText, 50)
    }
}

function flashText(){
    const txt = document.getElementById("my_text");
    txt.className = txt.className === "go"?"stop":"go"
}

function stopTextColor(){
    clearInterval(nInterVId)
    nInterVId = null
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);