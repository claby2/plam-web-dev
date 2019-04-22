let nav_toggle = ()=>{
    if(!clicked){
        navbar.classList.remove("hide")
        hamburger.classList.add("alt");
        clicked = true;
    } else {
        navbar.classList.add("hide")
        hamburger.classList.remove("alt");
        clicked = false;
    }
}

hamburger = document.getElementById("hamburger-id");
navbar = document.getElementById("navbar-id");

about = document.getElementById("about-id");
pastwork = document.getElementById("pastwork-id");
clientreviews = document.getElementById("clientreviews-id");
let clicked = false;

hamburger.addEventListener("click", nav_toggle);
about.addEventListener("click", nav_toggle);
pastwork.addEventListener("click", nav_toggle);
clientreviews.addEventListener("click", nav_toggle);