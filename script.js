// Variables & Conditionals
function checkNumber() {
  let num = document.getElementById("userNumber").value;
  let result = document.getElementById("result1");

  if (num > 0) {
    result.textContent = "The number is positive ✅";
  } else if (num < 0) {
    result.textContent = "The number is negative ❌";
  } else {
    result.textContent = "The number is zero 0️⃣";
  }
}

// Functions
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("result2").textContent = `Total = ${total}`;
}

function toggleMessage() {
  let text = document.getElementById("toggleText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

// Loops
function showCountdown() {
  let countdownText = "";
  for (let i = 5; i >= 1; i--) {
    countdownText += i + " ";
  }
  document.getElementById("countdown").textContent = countdownText;
}

function listFruits() {
  let fruits = ["Apple 🍎", "Banana 🍌", "Orange 🍊", "Mango 🥭"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old list

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// DOM Manipulation
function changeHeading() {
  document.querySelector("h1").textContent = "🎉 Heading Changed Dynamically!";
}

function addNewItem() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Dynamic Item 🆕";
  document.getElementById("fruitList").appendChild(newItem);
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
