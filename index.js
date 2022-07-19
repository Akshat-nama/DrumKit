let len = document.querySelectorAll(".drum").length;

//For buttn clicked
for (let i = 0; i < len; i++) {
    console.log("Value of i is ", i);
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonClicked = this.innerHTML;
        playSound(buttonClicked);  
        applyAnimation(buttonClicked);

    })
}

function playSound(button){
    switch (button) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("Sahi button daba");


    }
}
//For key pressed
document.addEventListener('keypress',function(event){
    playSound(event.key);
    applyAnimation(event.key);
})

function applyAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}





