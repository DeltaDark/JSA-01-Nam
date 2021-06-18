function validate() {
    var un = document.getElementById("usern").value;
    var pw = document.getElementById("pword").value;
    var valid = false;

    var unArray = ["kekw7", "sussybaka420", "coknbaltort69", "sverdeprsn3"];
    var pwArray = ["loltwitch", "amoguz", "cbt0sht", "plssndhlp"];
    var fnArray = ["Mark Walters", "Jonathan Goss", "Lisa Cain", "Jenny Dempsey"];

    for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            valid = true;
            break;  
        }
    }

    if (valid) {
        alert ("Login was successful");
        document.getElementById("mandatory1").value = un;
    }
    else {
        alert("Invalid Username and/or Password! Please try again. You will not be able to submit this form without a successful login")
        document.getElementById("pword").value = "";
        document.getElementById("usern").value = "";
        document.getElementById("usern").focus();
    }
}
