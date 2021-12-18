buttons = document.querySelectorAll('button');

document.querySelectorAll('.C4');
document.querySelectorAll('.A5');
document.querySelectorAll('.B5');
document.querySelectorAll('.G5');
document.querySelectorAll('.F5');
document.querySelectorAll('.E5');
document.querySelectorAll('.D5');
document.querySelectorAll('.C5');
document.querySelectorAll('.B4');
document.querySelectorAll('.A4');
document.querySelectorAll('.G4');
document.querySelectorAll('.F4');
document.querySelectorAll('.E4');
document.querySelectorAll('.D4');

document.querySelectorAll('.Bb5');
document.querySelectorAll('.Ab5');
document.querySelectorAll('.Gb5');
document.querySelectorAll('.Eb5');
document.querySelectorAll('.Db5');
document.querySelectorAll('.Bb4');
document.querySelectorAll('.Ab4');
document.querySelectorAll('.Gb4');
document.querySelectorAll('.Eb4');
document.querySelectorAll('.Db4');


//chords white
var C4 = new Audio('piano-mp3/C4.mp3');
var A5 = new Audio('piano-mp3/A5.mp3');
var B5 = new Audio('piano-mp3/B5.mp3');
var G5 = new Audio('piano-mp3/G5.mp3');
var F5 = new Audio('piano-mp3/F5.mp3');
var E5 = new Audio('piano-mp3/E5.mp3');
var D5 = new Audio('piano-mp3/D5.mp3');
var C5 = new Audio('piano-mp3/C5.mp3');
var B4 = new Audio('piano-mp3/B4.mp3');
var A4 = new Audio('piano-mp3/A4.mp3');
var G4 = new Audio('piano-mp3/G4.mp3');
var F4 = new Audio('piano-mp3/F4.mp3');
var E4 = new Audio('piano-mp3/E4.mp3');
var D4 = new Audio('piano-mp3/D4.mp3');
//chords black
var Bb5 = new Audio('piano-mp3/Bb5.mp3');
var Ab5 = new Audio('piano-mp3/Ab5.mp3');
var Gb5 = new Audio('piano-mp3/Gb5.mp3');
var Eb5 = new Audio('piano-mp3/Eb5.mp3');
var Db5 = new Audio('piano-mp3/Db5.mp3');
var Bb4 = new Audio('piano-mp3/Bb4.mp3');
var Ab4 = new Audio('piano-mp3/Ab4.mp3');
var Gb4 = new Audio('piano-mp3/Gb4.mp3');
var Eb4 = new Audio('piano-mp3/Eb4.mp3');
var Db4 = new Audio('piano-mp3/Db4.mp3');

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        ///WHITE BUTTONS CLICK

        if(buttonText == 'C4'){
            C4.play();
            C4.currentTime=0;
        }
        else if(buttonText == 'D4'){
            D4.play();
            D4.currentTime=0;
        }
        else if(buttonText == 'E4'){
            E4.play();
            E4.currentTime=0;
        }
        else if(buttonText == 'F4'){
            F4.play();
            F4.currentTime=0;
        }
        else if(buttonText == 'G4'){
            G4.play();
            G4.currentTime=0;
        }
        else if(buttonText == 'A4'){
            A4.play();
            A4.currentTime=0;
        }
        else if(buttonText == 'B4'){
            B4.play();
            B4.currentTime=0;
        }
        else if(buttonText == 'C5'){
            C5.play();
            C5.currentTime=0;
        }
        else if(buttonText == 'D5'){
            D5.play();
            D5.currentTime=0;
        }
        else if(buttonText == 'E5'){
            E5.play();
            E5.currentTime=0;
        }
        else if(buttonText == 'F5'){
            F5.play();
            F5.currentTime=0;
        }
        else if(buttonText == 'G5'){
            G5.play();
            G5.currentTime=0;
        }
        else if(buttonText == 'A5'){
            A5.play();
            A5.currentTime=0;
        }
        else if(buttonText == 'B5'){
            B5.play();
            B5.currentTime=0;
        }

        ///BLACK BUTTONS

        else if(buttonText == 'Db4'){
            Db4.play();
            Db4.currentTime=0;
        }
        else if(buttonText == 'Eb4'){
            Eb4.play();
            Eb4.currentTime=0;
        }
        else if(buttonText == 'Gb4'){
            Gb4.play();
            Gb4.currentTime=0;
        }
        else if(buttonText == 'Ab4'){
            Ab4.play();
            Ab4.currentTime=0;
        }
        else if(buttonText == 'Bb4'){
            Bb4.play();
            Bb4.currentTime=0;
        }
        else if(buttonText == 'Db5'){
            Db5.play();
            Db5.currentTime=0;
        }
        else if(buttonText == 'Eb5'){
            Eb5.play();
            Eb5.currentTime=0;
        }
        else if(buttonText == 'Gb5'){
            Gb5.play();
            Gb5.currentTime=0;
        }
        else if(buttonText == 'Ab5'){
            Ab5.play();
            Ab5.currentTime=0;
        }
        else if(buttonText == 'Bb5'){
            Bb5.play();
            Bb5.currentTime=0;
        }
    })
    
}