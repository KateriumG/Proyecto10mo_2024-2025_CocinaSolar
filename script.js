let CreditVisible = false;

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
