const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 50;
ctx.globalCompositeOperation = "multiply"; 
// ^^^ look this up on MDN for other similar cool PhotoShop-ish tricks

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; 
let direction = true;

function draw(e) {
	if(!isDrawing) return; //stop fn from running when they are not mouse down
	console.log(e);
	ctx.strokeStyle	= `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();
	// lastX = e.offsetX;
	// lastY = e.offsetY;
	//last two lines are the same as the below -- this is called destructuring an array
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
	if(hue>=360){
		hue=0;
	};
	if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if(direction){
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY]; //allows your starting point to match first click	
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);