//En variabel med et tal:
let score = 0;


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

    this.classList.add("pause");


    this.removeEventListener("click", clickKat);

}





//NEDTÆLLING:

function clickKvinde() {
    console.log("kvinde clicked");


    //hvis den bare skal gå op med en:
    score--;
    //Se om det virker:
    console.log(score);


    //Nu vil vi selecte score div'en for at vise den, og overskrive hvad der står i html'en (så den skriver 2 efter 1 osv). Den sidste score er let variablen score, hvor #score er div'en. DVS inde i #score, vil vi tilføje optælleren. En str

    document.querySelector("#points").innerHTML = score;

    document.querySelector("#dead1").classList.remove("hide");


    //Viser den, jeg har klikket på.
    console.log(this);

    this.classList.add("pause");
    this.removeEventListener("click", clickKvinde);


}



function clickTwitter() {
    console.log("twitter clicked");

    //RYD OP:

    document.querySelector("#twitter").removeEventListener("click", clickTwitter);

    //

    document.querySelector("#dead1").classList.add("hide");








}
