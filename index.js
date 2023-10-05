const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-count");
let remainingCount = document.getElementById("remaining-count");

let userChar = 0;

//to update the character on screen
const updateCounter = () => {
    userChar = charval.value.length;
    totalCount.innerText = userChar;
    remainingCount.innerText = 250 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());
//to copy text
const copyText = () => {
    charval.select();
    charval.setSelectionRange(0,250)
    navigator.clipboard.writeText(charval.value)
}