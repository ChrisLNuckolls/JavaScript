var keysPressed = [];
var eventText = 'zoey';

window.addEventListener('keyup', (e) => {
    keysPressed.push(e.key);
    keysPressed.splice(-eventText.Length - 1, keysPressed.length - eventText.length);
    if (keysPressed.join('').includes(eventText)) {
        cornify_add();
    }
    console.log(keysPressed);
});