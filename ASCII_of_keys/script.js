//calculates the ascci value of a key

window.addEventListener('keydown',function(e){
    // const key = e.keyCode;
    // console.log(key);
    // let ascciCode = key + 32; //converts the keyCode to ASCII.
    // console.log('codigo ascci: ' + ascciCode);
    // this.document.getElementById("text-1").innerHTML=ascciCode; //changes the text to show the ascci code of the key pressed. 
    // ///// code in case that caps lock is activated.
    // const capsLock = e.getModifierState('CapsLock');
    // if(capsLock){
    //     console.log("caps lock activated");
    //     const ascciCode = key
    //     this.document.getElementById("text-1").innerHTML=ascciCode; //changes the text to show the ascci code of the key pressed.
    // } ;
    ///
    let keyPressed = e.key;
    ascciCode = keyPressed.charCodeAt(0); //returns ascci value of the key pressed
    console.log(ascciCode);
    this.document.getElementById("text-1").innerHTML=ascciCode; //changes the text to show the ascci code of the key pressed.

});