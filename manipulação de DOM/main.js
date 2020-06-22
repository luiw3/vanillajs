// id keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event) {
 let audioKeyCode = getKeyCode(event);

 const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

 const isKeyValid = key

 if (!isKeyValid) {
    return;
 }

 const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
 audio.currentTime = 0;
 audio.play()
 console.log(key.attributes)
 console.log(key.classList)
}
// mouse click
function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === "keydown";
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}
keys.forEach((key) => {
    key.addEventListener("click", playNote)
})
// key press
window.addEventListener("keydown", playNote)