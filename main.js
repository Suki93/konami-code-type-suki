

const pressed = [];
const secretCode = 'suki';

const cornify_add = 'http://www.cornify.com/js/cornify.js';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
	document.body.style.backgroundImage = "url('hack.jpg')";
  }
  console.log(pressed);
});