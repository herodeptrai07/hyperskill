// const tagKBD = document.getElementsByTagName("kbd");
//
// //tagKBD.addEventListener("click", myFunction);
// for (var i = 0 ; i < tagKBD.length; i++) {
//     tagKBD[i].addEventListener('onkeydown' , myFunction , false ) ;
// }
//
// function myFunction(e) {
//
// }
const list = ["A", "S", "D", "F", "G", "H", "J"];

document.addEventListener("keydown", function(event) {
    // const x = event.key;
    // const n = list.includes(x.toUpperCase());
    // if (n === true) {
    //     console.log("The " + x + " key is pressed.");
    // } else {
    //     console.log("warning");
    // }
    const x = event.key;
    const n = list.includes(x.toUpperCase());

    let audio;

    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" ||
        event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" ||
        event.code == "KeyJ" || event.code == "KeyW" || event.code == "KeyE" ||
        event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {
        console.log("The '" + event.key.toUpperCase() + "' key is pressed.");
        let key = event.key.toLocaleUpperCase();
        audio = new Audio("audio/" + key + ".mp3");
        audio.load();
        audio.play();
    }
    else {
        console.log("Some another key is pressed.")
    }
});

// let audio1 = document.createElement("AUDIO");
// let audio2 = new Audio("path/to/myAudio.mp3");
// let audio3 = document.getElementById("myAudioID");

// let audio = document.getElementById("piano");
// let src = audio.src;
// console.log(src);
//
// audio.src = "audio/A.mp3";
//
// let duration = audio.duration;
// console.log(duration);
//
// audio.load();
//
// audio.play();
// audio.pause();