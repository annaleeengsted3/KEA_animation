window.addEventListener("load", sidenVises);

function sidenVises() {
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

    document.querySelector("#start").addEventListener("animationend", startGame);


}

function startGame() {

    console.log("start game");

    //ryd op

    document.querySelector("#start").removeEventListener("animationend", startGame);

    document.querySelector("#start").classList.remove("fade_out");


    //ryd op slut
    //Det her skal ske:
    document.querySelector("#start").classList.add("hide");


    //document.querySelector("#game").classList.add("xxxx");



}
