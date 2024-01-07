let bg = document.querySelector('.bg');
let hero__about = document.querySelector('.hero__about');

document.onmousemove = (e)=>{
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;

	bg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
	hero__about.style.transform = "translate(-" + x * 70 + "px, -" + y * 70 + "px)";
};
