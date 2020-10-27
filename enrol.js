var continueButton = document.getElementsByClassName("continuebutton")[0].querySelector(".btn");

if(continueButton) {
    continueButton.click()
}
else {
    console.error("Continue button was not found!")
}