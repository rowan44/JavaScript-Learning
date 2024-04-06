let fullName = "Tong";
let age = 21;
let isStudent = true;

console.log(`Hello`);
document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} Years old`;
document.getElementById("p3").textContent = `Enrolled : ${isStudent}`;

let username;
username = window.prompt("What is your username ?")
console.log(username)