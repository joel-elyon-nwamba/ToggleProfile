const profileToggleOne = document.querySelector(".profile1");
const profileToggleTwo = document.querySelector(".profile2");
const profileToggleThree = document.querySelector(".profile3");
const profileToggleFour = document.querySelector(".profile4");
const btnProfileOne = document.getElementById("toggle1");
const btnProfileTwo = document.getElementById("toggle2");
const btnProfileThree = document.getElementById("toggle3");
const btnProfileFour = document.getElementById("toggle4");

function toggleProfile() {
    if(profileToggleOne.style.display === "none") {
        profileToggleOne.style.display = "block";
    } else {
        profileToggleOne.style.display = "none";
    }
}


function toggleProfileTwo() {
    if(profileToggleTwo.style.display === "none") {
        profileToggleTwo.style.display = "block";
    } else {
        profileToggleTwo.style.display = "none";
    }
}

function toggleProfileThree() {
    if(profileToggleThree.style.display === "none") {
        profileToggleThree.style.display = "block";
    } else {
        profileToggleThree.style.display = "none";
    }
} 

function toggleProfileFour() {
    if(profileToggleFour.style.display === "none") {
        profileToggleFour.style.display = "block";
    } else {
        profileToggleFour.style.display = "none";
    }
}


btnProfileOne.addEventListener("click", toggleProfile);
btnProfileTwo.addEventListener("click", toggleProfileTwo);
btnProfileThree.addEventListener("click", toggleProfileThree);
btnProfileFour.addEventListener("click", toggleProfileFour);   