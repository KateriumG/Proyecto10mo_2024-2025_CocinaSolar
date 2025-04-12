let CreditVisible = false;
let SolarImages = ["Assets/CocinasSolares/CocinaSolar1.jpg", "Assets/CocinasSolares/CocinaSolar2.jpeg", "Assets/CocinasSolares/CocinaSolar3.jpeg", "Assets/CocinasSolares/CocinaSolar4.jpeg", "Assets/CocinasSolares/CocinaSolar5.webp"];
let SolarIndex = 0;

function ChangeCreditsV() {
    var credits = document.getElementById("Credits");
    var creditsbutton = document.getElementById("CreditsButton");
    if (CreditVisible == false) {
        credits.style.display = "block";
        CreditVisible = true;
        creditsbutton.style.marginBottom = "10px";
    } else {
        credits.style.display = "none";
        CreditVisible = false;
        creditsbutton.style.marginBottom = "250px";
    }
}

function ChangeSolarIndex(number){
    imgStart = document.getElementById("imgStart");
    SolarIndex += number;
    if (SolarIndex >= SolarImages.length) {
        SolarIndex = 0;
    } else if(SolarIndex < 0) {
        SolarIndex = SolarImages.length - 1;
    }
    imgStart.src = SolarImages[SolarIndex];
}