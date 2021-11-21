'use stricct';

/*ProgressBar*/
onscroll = () => {
	const page = document.documentElement; //element HTML
	let totalHeight = page.scrollHeight; //Height Total of page
	let visibleHeight = page.clientHeight; //Height visible
	let scrolling = page.scrollTop; //size of scroll
	let max = totalHeight - visibleHeight;
	progressBar.style.width = Math.floor((scrolling / max) * 100) + '%'; //width in %
};

/*Hamburger*/
hamburger.onclick = () => {
	hamburger.classList.toggle('open');
	// nav_ul.classList.toggle("slide");
	document.body.classList.toggle('noScroll');
};

/*Scroll*/
const handleScroll = () => {
	if (window.scrollY > 0) {
		iconScroll.classList.remove('hidden');
		iconScroll.classList.add('visible');
	} else iconScroll.classList.replace('visible', 'hidden');
};

document.addEventListener('scroll', handleScroll);

iconScroll.onclick = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	iconScroll.classList.add('iconScroll_top');
	setTimeout(() => iconScroll.classList.remove('iconScroll_top'), 1000);
};
