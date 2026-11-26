//ophalen van element uit html

let title = document.getElementById("title");
title.style.color = "red";

let naam = prompt("wat is je naam?");
document.getElementById("name").innerText = naam;
document.body.style.color = "green";
