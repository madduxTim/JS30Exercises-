const pressed = [];
const secretCode = "3838404037393739666566656665";
window.addEventListener("keyup", (e) => {
	pressed.push(e.keyCode);
	pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
	if (pressed.join("").includes(secretCode)) {
		cornify_add();
	}
});