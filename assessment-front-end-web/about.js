console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has been submitted!!");
}

function giveCompliment(evt) {
	alert("Thanks for saying hi! You're so nice!!");
}

let form = document.querySelector("#contact");
let img = document.querySelector("#duck");

form.addEventListener("submit", handleSubmit);
img.addEventListener("mouseover", giveCompliment);
