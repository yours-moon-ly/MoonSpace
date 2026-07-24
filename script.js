const bird=document.getElementById("bird");

const bubble=document.getElementById("speechBubble");

const messages=[

"Chirp!",

"Welcome to MoonSpace!",

"Don't forget to hydrate!",

"Grinding today?",

"Reading anything good?"

];

bird.onclick=()=>{

    

    bubble.innerText=messages[Math.floor(Math.random()*messages.length)];

    bubble.style.display="block";

    setTimeout(()=>{

    bubble.style.display="none";

    },2500);

}

const bgm = document.getElementById("bgm");

document.addEventListener("click", function () {
    bgm.play();
}, { once: true });

enterBtn.addEventListener("click", () => {

    document.getElementById("cozyCorner").scrollIntoView({
        behavior: "smooth"
    });

});

const images = document.querySelectorAll(".leftImage");

let current = 0;

setInterval(() => {

    images[current].classList.remove("active");

    current = (current + 1) % images.length;

    images[current].classList.add("active");

}, 3000);