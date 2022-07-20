"use strict";
window.addEventListener("DOMContentLoaded",
function() {

    $("header").textillate({
        loop: false, 
        minDisplayTime: 2000, 
        initialDelay: 2000, 
        autoStart: true, 
        in: { 
        effect: "fadeInLeftBig", 
        delayScale: 1.5, 
        delay: 50, 
        sync: false, 
        shuffle: true 
        }
        });
      
        $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
        });
        
        
        
        setTimeout(
            function() {
    let popMessage = "いらっしゃい！おみくじ引いてって";
    window.alert(popMessage);
            },
            "5000"

        );
}, false

);

let resultSound = ["sound/omikuji_sound1.mp3","sound/omikuji_sound2.mp3","sound/omikuji_sound2.map3","sound/omikuji_sound2.mp3","sound/omikuji_sond2.mp3","sound/omikuji_sound3.mp3",];

let SoundEndflag = "0";
const btn1 = document.getElementById("btn1");
const omikujiText = 
btn1.addEventListener("click",
function() {

    if(soundEndflag === "1"){
        soundControl("end","");
    }

            let resulText = ["大吉!!!!!","吉!!!!","中吉!!!","小吉!!","末吉!","凶。。"];
            let resulColor = ["#ff0000","c71585","#ff1493","#ff69b4","#ff8c00","#1e90ff"];
            let resulFontSize = ["55px","50px","45px","40px","35px","30px"];
            let n = Math.floor(Math.random() * resulText.length);
            btn1.textContent = resulText[n];
            btn1.style.color = resulColor[n];
            btn1.style.fontSize =resulFontSize[n];
  
    $(document).snowfall("clear");
       
    $(document).ready(function(){
    $(document).snowfall({
    maxSpeed : 10, // 最大速度
    minSpeed : 1, // 最小速度
    maxSize : 20, // 最大サイズ
    minSize : 1, // 最小サイズ
    image : 'img/sakura_hanabira.png'
});
}); 

    }, false
);