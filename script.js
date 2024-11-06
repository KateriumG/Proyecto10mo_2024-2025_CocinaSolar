let CreditVisible = false;

function ChangeCreditsV() {
    var credits = document.getElementById("Credits");
    var creditsbutton = document.getElementById("CreditsButton");
    if (CreditVisible == false) {
        credits.style.display = "block";
        CreditVisible = true;
    } else {
        credits.style.display = "none";
        CreditVisible = false;
    }
}