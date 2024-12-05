// Get the audio element
const marasy8Audio = document.getElementById("marasy8Audio");

// Add event listener for mouseenter
marasy8Audio.addEventListener("mouseenter", function() {
    marasy8Audio.style.boxShadow = 
        `-4px 3px 10px #ffffff38,
        3px 2px 10px #69d18575,
        -3px -3px 10px #2719ecb5`;
});

// Add event listener for mouseleave
marasy8Audio.addEventListener("mouseleave", function() {
    marasy8Audio.style.boxShadow = "none";
});