/* 
    IBM In-house {Web Coder} course Assignment Snippet.
    JavaScript file.
    For internal IBM use.
*/

// JavaSCript goes here...

// function submitData(){
//     var form =document.getElementId('myFrom');
//     google.script.run.withFailureHandler(alert).withSuccessHandler(alret)
// }
// Create Audio
var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer() {
    audio = new Audio();
    audio.src = "Music/Peanuts Movie.mp3";
    audio.loop = true;
    audio.play();
    //set object references
    playbtn = document.getElementById("playpausebtn");
    mutebtn = document.getElementById("mutebtn");
    //Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);
    //Functions
    function playPause() {
        if (audio.paused) {
            audio.play();
            // playPause.value("PAUSE");
            document.getElementById("playpausebtn").value = "PAUSE"
            // playbtn.style.background();
        } else {
            audio.pause();
            // playbtn.style.background();
            document.getElementById("playpausebtn").value = "PLAY"
            // playPause.value("PLAY");
        }
    }
    // function mute() {
    //     if (audio.muted) {
    //         audio.muted = false;
    //         document.getElementById("mutebtn").value = "SPEAKER"
    //     }
    //     else {
    //         audio.muted = true;
    //         document.getElementById("mutebtn").value = "MUTE"
    //     }
    // }

}
window.addEventListener("load", initAudioPlayer);