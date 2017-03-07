const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

// const seconds = timeNodes.map(node => node.dataset.time);
// ^^^ this doesn't work, it's a node list, NOT an array,
// until you through in  the Array.from bit.

 const seconds = timeNodes
 	.map(node => node.dataset.time)
 	.map(timeCode => {
 		const [mins, secs] = timeCode.split(":").map(parseFloat);
 		return (mins * 60) + secs
 	})
 	.reduce((total, vidSeconds) => {
 		return total + vidSeconds 
 	});

 let secondsLeft = seconds;
 const hours = Math.floor(secondsLeft / 3600);
 secondsLeft = secondsLeft % 3600;
 const mins = Math.floor(secondsLeft / 60);
 secondsLeft = secondsLeft % 60; 
 console.log(hours, mins, secondsLeft);

