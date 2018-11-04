//En variabel med et tal:
"use strict";
let score = 0;
let life = 3;


window.addEventListener("load", pageLoaded);

function pageLoaded() {
    console.log("siden vises");
    //For at teste om vi kommer derhen, god ide altid at sætte på!!


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

    document.querySelector("#musictoggle").addEventListener("click", toggleMusic);

    document.querySelector("#soundtoggle").addEventListener("click", toggleSound);

    document.querySelector("#exit").addEventListener("click", hideSettings);


}

function toggleMusic() {

}

function toggleSound() {

}

function hideSettings() {

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

    timeStarts();

}


function timeStarts() {

    setTimeout(timesUp, 10000)

}

function timesUp() {

    if (points >= 10) {

        document.querySelector("#complete").classList.remove("hide");



    } else if (points < 10) {

        document.querySelector("#gameover").classList.remove("hide");
    }
}



function clickKat() {

    console.log("kat clicked");
    //score = score + 5; er lig med:
    //score += 5;

    //hvis den bare skal gå op med en:
    score++;
    //Se om det virker:
    console.log(score);


    //Nu vil vi selecte score div'en for at vise den, og overskrive hvad der står i html'en (så den skriver 2 efter 1 osv). Den sidste score er let variablen score, hvor #score er div'en. DVS inde i #score, vil vi tilføje optælleren. En str

    document.querySelector("#points").innerHTML = score;

    //Viser den, jeg har klikket på.
    console.log(this);

    //this.classList.add("pause");

    //myVar = setTimeout(pauseFunc, 1000);


    //this.removeEventListener("click", clickKat);


    gameStatus();


}


//function pauseFunc() {
// document.querySelector("#twitter").classList.remove("pause");

// document.querySelector("#twitter").classList.add("resume");

//}


//NEDTÆLLING:

function clickKvinde() {
    console.log("kvinde clicked");


    //hvis den bare skal gå op med en:

    //Se om det virker:
    console.log(score);


    //Nu vil vi selecte score div'en for at vise den, og overskrive hvad der står i html'en (så den skriver 2 efter 1 osv). Den sidste score er let variablen score, hvor #score er div'en. DVS inde i #score, vil vi tilføje optælleren. En str

    document.querySelector("#points").innerHTML = score;

    //document.querySelector("#life1").classList.add("hide");


    if (this.classList.contains("type2")) {
        console.log("Type2");
        document.querySelector("#heart" + life).classList.add("hide");
        life--;


    }



    //document.querySelector("#heart" + life).classList.add("hide");


    //Viser den, jeg har klikket på.
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





    //document.querySelector("#life1").classList.remove("hide");








}



function gameStatus() {
    console.log("gameStatus");
    console.log(life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
    } else if (points == 10) {

        document.querySelector("#complete").classList.remove("hide");
    }


}

function gameOver() {

}

function levelCompleted() {

}
