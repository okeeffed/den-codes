import SmoothScroll from 'smooth-scroll';

class Layout {
	/**
	 * Initialise the scroll listeneres
	 */
	init() {
		const scroll = new SmoothScroll();
		const options = { offset: 90 };

		const hej = document.getElementById('hej');
		const what = document.getElementById('what');
		const tell = document.getElementById('tell');
		const show = document.getElementById('show');
		const connect = document.getElementById('connect');

		const linkHej = document.getElementById('link-hej');
		const linkWhat = document.getElementById('link-what');
		const linkTell = document.getElementById('link-tell');
		const linkShow = document.getElementById('link-show');
		const linkConnect = document.getElementById('link-connect');

		// Set listen events
		linkHej.addEventListener('click', (e) => {
			e.preventDefault();
			scroll.animateScroll(hej, null, options);
		} ,false)

		linkWhat.addEventListener('click', (e) => {
			e.preventDefault();
			scroll.animateScroll(what, null, options);
		} ,false)

		linkTell.addEventListener('click', (e) => {
			e.preventDefault();
			scroll.animateScroll(tell, null, options);
		} ,false)

		linkShow.addEventListener('click', (e) => {
			e.preventDefault();
			scroll.animateScroll(show, null, options);
		} ,false)

		linkConnect.addEventListener('click', (e) => {
			e.preventDefault();
			scroll.animateScroll(connect, null, options);
		} ,false)
	}
}

export default Layout;
