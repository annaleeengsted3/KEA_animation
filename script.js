//En variabel med et tal:
//"use strict";
let score = 0;
let life = 3;
let timeLeft = 10;
let showSettingsEffektSound = true;
let showSettingsMusic = true;



window.addEventListener("load", pageLoaded);

function pageLoaded() {
    console.log("siden vises");
    //For at teste om vi kommer derhen, god ide altid at sætte på!!

    document.querySelector("#myMusic").play();
    document.querySelector("#myMusic").loop = true;

    showStart();
    //Det betyder: hop ned i den funktion!


}




function showStart() {
    console.log("show start");





    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#start_play").classList.add("pulse");


    document.querySelector("#start_play").addEventListener("click", hideStart);

    document.querySelector("#start_settings").addEventListener("click", showSettings);

}


function showSettings() {
    console.log("show settings");

    //RYD OP:
    document.querySelector("#start_settings").removeEventListener("click", showSettings);
    document.querySelector("#start_play").classList.add("pause");

    document.querySelector("#start_cat").classList.add("pause");

    //

    document.querySelector("#settings").classList.remove("hide");

    document.querySelector("#music").addEventListener("click", toggleMusic);

    document.querySelector("#sfx").addEventListener("click", toggleSound);

    document.querySelector("#exit").addEventListener("click", hideSettings);




}




function toggleMusic() {

    console.log("toggleMusic");

    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }


}


function musicOff() {
    console.log("musicOff");

    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;
}

function musicOn() {
    console.log("musicOn");

    document.querySelector("#music").classList.remove("off");
    document.querySelector("#music").classList.add("on");

    document.querySelector("#myMusic").muted = false;

}




function toggleSound() {

    console.log("toggleSound");


    //Tjek lyden, er lyden lig med true, dvs = =, skal lyden være lig med false, og føre ned til soundsOff.

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }


}

function soundsOff() {
    console.log("soundsOff");

    document.querySelector("#sfx").classList.remove("on");
    document.querySelector("#sfx").classList.add("off");

    document.querySelector("#sfx1").muted = true;
    document.querySelector("#sfx2").muted = true;
}

function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#sfx1").muted = false;
    document.querySelector("#sfx2").muted = false;

}







function hideSettings() {

    console.log("hideSettings");
    document.querySelector("#settings").classList.add("hide");

}




function hideStart() {
    console.log("hide start");

    //rydde op:
    document.querySelector("#start_play").removeEventListener("click", hideStart);
    document.querySelector("#start_play").classList.remove("pulse");

    //
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", showAbout);


}




function showAbout() {




    console.log("show about");

    //ryd op

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");




    //ryd op slut
    //Det her skal ske:
    document.querySelector("#start").classList.add("hide");


    //document.querySelector("#about").classList.remove("hide");

    document.querySelector("#about_play").addEventListener("click", startGame);



}

function startGame() {
    console.log("start game");

    timeLeftFc();

    document.querySelector("#myMusic").volume = 0.5;

    //RYD OP:

    document.querySelector("#about").classList.add("hide");

    document.querySelector("#about_play").removeEventListener("click", startGame);





    //Katte, Kvinder og tweet start animation:
    document.querySelector("#katbg").classList.add("rtl_katbg");
    document.querySelector("#katfg").classList.add("ltr_katfg");

    document.querySelector("#kvindebg").classList.add("ltr_kvindebg");
    document.querySelector("#kvindefg").classList.add("rtl_kvindefg");



    document.querySelector("#twitter").classList.add("tweet");




    //Katte, Kvinder og tweet gøres clickable:


    document.querySelector("#katbg").addEventListener("click", clickKat);
    document.querySelector("#katfg").addEventListener("click", clickKat);


    document.querySelector("#kvindebg").addEventListener("click", clickKvinde);
    document.querySelector("#kvindefg").addEventListener("click", clickKvinde);



    document.querySelector("#twitter").addEventListener("click", clickTwitter);

    //Vi skal lytte efter en event. Hvad for en type event? "load", "click", "animationend" i vores opgave. COMMA, funktionsnavn.



    //Når noget er med gåseøjne: det er string, dvs ikke kode og bare noget tekst


    document.querySelector("#points").innerHTML = score;



}






function clickKat() {

    console.log("kat clicked");
    //score = score + 5; er lig med:
    //score += 5;

    //hvis den bare skal gå op med en:
    score++;
    //Se om det virker:
    console.log(score);

    document.querySelector("#sfx1").currentTime = 0;
    document.querySelector("#sfx1").play();



    document.querySelector("#points").innerHTML = score;

    //Viser den, jeg har klikket på.
    console.log(this);




    gameStatus();


}




//NEDTÆLLING:

function clickKvinde() {
    console.log("kvinde clicked");


    //
    score--;
    //Se om det virker:
    console.log(score);


    //Nu vil vi selecte score div'en for at vise den, og overskrive hvad der står i html'en (så den skriver 2 efter 1 osv). Den sidste score er let variablen score, hvor #score er div'en. DVS inde i #score, vil vi tilføje optælleren. En str

    document.querySelector("#points").innerHTML = score;

    //document.querySelector("#life1").classList.add("hide");

    life--;



    document.querySelector("#heart" + life).classList.add("hide");



    document.querySelector("#sfx2").currentTime = 0;
    document.querySelector("#sfx2").play();



    //document.querySelector("#heart" + life).classList.add("hide");



    console.log(this);

    //this.classList.add("pause");
    //this.removeEventListener("click", clickKvinde);


    gameStatus();
}



function clickTwitter() {
    console.log("twitter clicked");

    //RYD OP:

    document.querySelector("#twitter").removeEventListener("click", clickTwitter);

    //

    life++;


    document.querySelector("#heart" + life).classList.remove("hide");









    //document.querySelector("#life1").classList.remove("hide");








}



function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        gameOver();
    } else if (points == 10) {

        gameWon();
    }



}




function timeLeftFc() {
    console.log("function time_left=" + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeft, 1000);
    } else {
        gameOver();
    }



}

function gameOver() {
    document.querySelector("#gameover").classList.remove("hide");
    timeLeft = 0;

    document.querySelector("#playagain_knap").addEventListener("click", gameReset);
    document.querySelector("#playagain_knap").addEventListener("click", startGame);
}

function gameWon() {

}


function gameReset() {

    //Når man trykker play_again:

   location = location.href;

    //reset music

//    let score = 0;
 //    let life = 3;
 //    let time = 10;

    //startGame();

}
