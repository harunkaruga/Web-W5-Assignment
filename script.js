// ============================
// Part 1: Variables & Conditionals
// ============================
document.getElementById("submitBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    let age = parseInt(document.getElementById("ageInput").value);

    if (age >= 18) {
        document.getElementById("output").innerText = `${name}, you are an adult.`;
    } else {
        document.getElementById("output").innerText = `${name}, you are underage.`;
    }
});

// ============================
// Part 2: Functions
// ============================
function greet(userName) {
    return `Hello, ${userName}! Welcome to JavaScript.`;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(greet("Harun"));
console.log("Total price:", calculateTotal(50, 3));

// ============================
// Part 3: Loops
// ============================
let fruits = ["Apple", "Banana", "Mango"];
let fruitsDiv = document.getElementById("fruitsList");

for (let i = 0; i < fruits.length; i++) {
    let p = document.createElement("p");
    p.innerText = fruits[i];
    fruitsDiv.appendChild(p);
}

let count = 3;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

// ============================
// Part 4: DOM Manipulation
// ============================

// 1. Change heading text
document.getElementById("heading").innerText = "JavaScript Assignment Ready!";

// 2. Toggle highlight class on button click
document.getElementById("toggleBtn").addEventListener("click", function() {
    document.body.classList.toggle("highlight");
});

// 3. Create element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was created dynamically via JavaScript!";
document.body.appendChild(newPara);
