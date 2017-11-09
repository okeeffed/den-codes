import Layout from './modules/layout';
import Swiper from 'swiper';

function fn(){
	const layout = new Layout();
	layout.init();
}
// Native
// Check if the DOMContentLoaded has already been completed
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  onReady();
} else {
  document.addEventListener('DOMContentLoaded', onReady);
}

function onReady() {
	const swiper = new Swiper ('.swiper-container', {
		// Optional params
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			type: 'progressbar',
		},
	});
}

