// Events: practice-1
document.getElementById("btn").addEventListener('click',function(){
    const titleText = document.getElementById("title");
    titleText.innerText = "Wow! you just clicked Me."
});

//practice-2
function redColor() {
    document.body.style.backgroundColor = "red";
}

// practice-3
document.getElementById("update-btn").addEventListener('click', function(){
    const inputField = document.getElementById("input-name");
    const inputText =  inputField.value;
    const name = document.getElementById("name-field");
    name.innerText = inputText;
})