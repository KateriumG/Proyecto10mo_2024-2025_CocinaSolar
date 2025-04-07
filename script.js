let CreditVisible = false;
let SolarImages = ["Assets/Cocinas Solares/CocinaSolar1.jpg", "Assets/Cocinas Solares/CocinaSolar2.jpeg", "Assets/Cocinas Solares/CocinaSolar3.jpeg", "Assets/Cocinas Solares/CocinaSolar4.jpeg", "Assets/Cocinas Solares/CocinaSolar5.webp"];
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
    
}
