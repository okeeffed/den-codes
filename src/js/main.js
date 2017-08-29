import layout from './modules/layout';





function fn(){
	const test = new layout();
  test.init();
}
// Native
// Check if the DOMContentLoaded has already been completed
if (document.readyState === 'complete' || document.readyState !== 'loading') {
  fn();
} else {
  document.addEventListener('DOMContentLoaded', fn);
}



