//plays and audio when a key is pressed and changes the styles a little bit.
let activeAudio = null;
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const decoration = this.document.querySelector(`.decoration[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(!audio) return; //if a key that's not defined is pressed, ignore.
    if(activeAudio){   //stops the current audio so it doesn't overlap with other key audio.
        activeAudio.pause();
        activeAudio.currentTime=0;
    }
    activeAudio=audio;
    audio.currentTime = 0; //reset the sound so it doesn't overlap.
    key.classList.add('key-pressed'); //add a style when key is pressed.
    decoration.style.color='red'; //add color to the text
    audio.play();
    // waits 500ms before removing the style added
    this.setTimeout(function(){
        key.classList.remove('key-pressed'); 
        decoration.style.color=''; //removes color to the text


    },500);
});