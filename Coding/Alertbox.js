/* 
    IBM In-house {Web Coder} course Assignment Snippet.
    JavaScript file.
    For internal IBM use.
*/

// JavaSCript goes here...
// GETTING ALL INPUT TEXT

function check_info() {
    
        if (document.getElementById('name-id').value == "") {
            // alert('Please enter your name');      
            return false;
        } else {
            if (document.getElementById('email-id').value == "") {
                // alert('Please enter your Email');          
                return false;
            }
            else {
                // Alert.ok('Thank you for Subscrible with Us');
                // alert('Thank you for Subscrible with Us');    
                Alert.render('Thank you for subscribing with us'); 
                return true;            
    
            }
        }
    
    }
function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";

        // Box
        dialogbox.style.left = (winW/2) - (550 * 0.5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        // Message
        document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button class="btn btn-primary" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {

        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
        document.getElementById('myForm').reset();


    }
}
var Alert = new CustomAlert();




