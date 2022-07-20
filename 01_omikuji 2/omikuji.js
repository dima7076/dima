"use strict"

window.addEventListener("DOMContentLoaded",
    function () {
        $("header").textillate({
            loop: false,
            minDisplayTime: 2000,
            initialDelay: 2000,
            autoStart: true,
            in: {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 52,
                sync: false,
                shuffle: true
            }
        });
        $(function () {
            ScrollReveal().reveal("#btn1", { duration: 9000 });
        });

        setTimeout(
            function (){
                let popMessage = "いらっしゃい！おみくじ引いてって！";
                window.alert(popMessage);
            },
            "5000"
        );
        
    }, false
);

let soundEndflag = "0";
const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener("click",
    function () {
        
        if (soundEndflag == "1") {
            soundControl("end", "");
        }
        let resultText = ["大吉!!", "吉!!", "中吉!!", "小吉!!", "末吉!", "凶"];
        let resultColor = ["#ff0000", "#c71585", "#ff1493", "#ff69b4", "#ff8c00", "##1e90ff"];
        let resultFontSize = ["90px", "80px", "70px", "60px", "50px", "40px"];
        let resultsMaxSpeed = ["10", "10", "8", "5", "5", "5"];
        let resultMaxSize = ["30", "30", "20", "15", "20", "20"];
        let resultImage = ["img/star.png", "img/sakura_hanabira.png", "img/sakura_hanabira.png", "img/sakura_hanabira.png", "img/leaf.png", "img/snowflakes.png"];
        let resultSound = ["sound/omikuji_sound1.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound2.mp3", "sound/omikuji_sound2.mp3"
            , "sound/omikuji_sound2.mp3", "sound/omikuji_sound3.mp3"];
        let n = Math.floor(Math.random() * resultText.length);

        omikujiText.textContent = resultText[n];
        omikujiText.style.color = resultColor[n];
        omikujiText.style.fontSize = resultFontSize[n];
        
      
        w_sound = resultSound[n];
        soundControl("start", w_sound);
        soundEndflag = "1";


        $(document).snowfall("clear");

        setTimeout(
            function () {
                $(document).ready(function () {
                    $(document).snowfall({
                        maxSpeed: resultsMaxSpeed[n],
                        minSpeed: 1,
                        maxSize: resultMaxSize[n],
                        minSize: 1,
                        image: resultImage[n],
                    });
                });
            },
            "200"
        );

    }, false
);

let w_sound
let music
function soundControl(status, w_sound) {
    if(status === "start")
    {
        music = new Audio(w_sound);
        music.currentTime == 0;
        music.play();
    }
    else if(status === "end")
    {
        music.pause();
        music.currentTime = 0;
    }
}
