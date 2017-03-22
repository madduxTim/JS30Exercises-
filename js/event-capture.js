const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
	console.log(this.classList.value);
	// e.stopPropagation(); // stop bubbling from happening, so parents are not consoled
	// console.log(this);
}

divs.forEach(div => div.addEventListener("click", logText, {
	capture: false,
	once: true
}));

button.addEventListener("click", () => {
	console.log("click happened!");
}, {
	once: true
});