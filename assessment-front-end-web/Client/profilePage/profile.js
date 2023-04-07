let favColor = document.querySelector("#color");
let favPlace = document.querySelector("#place");
let favRitual = document.querySelector("#ritual");

const favAlert = (evt) => {
	if (evt.target.id === "color") {
		alert("My favorite color is Blue!");
	} else if (evt.target.id === "place") {
		alert("My favorite place is Top Golf!");
	} else if (evt.target.id === "ritual") {
		alert("My favorite ritual is taking a shower!");
	}
};

favColor.addEventListener("click", favAlert);
favPlace.addEventListener("click", favAlert);
favRitual.addEventListener("click", favAlert);
