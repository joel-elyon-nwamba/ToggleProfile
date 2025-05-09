const profileToggleOne = document.querySelector(".profile1");
const btnProfileOne = document.getElementById("toggle1");

function toggleProfile() {
    console.log("clickl me")
    if(profileToggleOne.style.display === "none") {
        profileToggleOne.style.display = "block";
    } else {
        profileToggleOne.style.display = "none";
    }
}

toggleProfile();

btnProfileOne.addEventListener("click", toggleProfile);